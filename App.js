import React from "react";
import { Alert, Text, View } from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";

export default class extends React.Component {
  state = {
    weathersymbol: null,
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${latitude}&lon=${longitude}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 5.1.1; Android SDK built for x86 Build/LMY48X) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/39.0.0.0 Mobile Safari/537.36",
        },
      }
    );

    this.setState({
      temp: data.properties.timeseries[0].data.instant.details.air_temperature,
      latitude: data.geometry.coordinates[1],
      longitude: data.geometry.coordinates[0],
      hum: data.properties.timeseries[0].data.instant.details.relative_humidity,
      weathersymbol:
        data.properties.timeseries[0].data.next_1_hours.summary.symbol_code,
      onehourweathersymbol:
        data.properties.timeseries[0].data.next_1_hours.summary.symbol_code,
      sixhourweathersymbol:
        data.properties.timeseries[0].data.next_6_hours.summary.symbol_code,
      twelvehourweathersymbol:
        data.properties.timeseries[0].data.next_12_hours.summary.symbol_code,
      lowtemp:
        data.properties.timeseries[0].data.next_6_hours.details
          .air_temperature_min,
      hightemp:
        data.properties.timeseries[0].data.next_6_hours.details
          .air_temperature_max,
    });
  };

  getWeather_kor = async (nx, ny) => {
    const date = new Date();
    var hour = this.addzero(date.getHours(), 2);
    if (date.getMinutes() < 40) {
      hour = this.addzero(date.getHours() - 1, 2);
    } else {
      hour = this.addzero(date.getHours(), 2);
    }
    const month = this.addzero(date.getMonth() + 1, 2);
    const day = this.addzero(date.getDate(), 2);
    const YMD = `${date.getFullYear()}${month}${day}`;
    const { data } = await axios.get(
      `http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst?serviceKey=nyS7vJiU96qerQjBI%2Bb%2B8%2FZYSSbtAqlP0HJVv05LdtUhDvh46cCio%2FxvGvmHNIwgowa9aZP0YHMLg3jK4djNzA%3D%3D&numOfRows=10&dataType=JSON&pageNo=1&base_date=${YMD}&base_time=${hour}00&nx=${nx}&ny=${ny}`
    );
    this.setState({
      temp_kor: data.response.body.items.item[3].obsrValue,
      hum_kor: data.response.body.items.item[1].obsrValue,
    });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      const rs1 = this.dfs_xy_conv("toXY", latitude, longitude);
      this.getWeather(latitude, longitude);
      this.getWeather_kor(rs1["x"], rs1["y"]);
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  componentDidMount() {
    this.getLocation();
  }

  addzero(num, digit) {
    // 자릿수 맞춰주기
    var zero = "";
    num = num.toString();
    if (num.length < digit) {
      for (var i = 0; i < digit - num.length; i++) {
        zero += "0";
      }
    }
    return zero + num;
  }
  dfs_xy_conv(code, v1, v2) {
    var RE = 6371.00877; // 지구 반경(km)
    var GRID = 5.0; // 격자 간격(km)
    var SLAT1 = 30.0; // 투영 위도1(degree)
    var SLAT2 = 60.0; // 투영 위도2(degree)
    var OLON = 126.0; // 기준점 경도(degree)
    var OLAT = 38.0; // 기준점 위도(degree)
    var XO = 43; // 기준점 X좌표(GRID)
    var YO = 136; // 기1준점 Y좌표(GRID)
    var DEGRAD = Math.PI / 180.0;
    var RADDEG = 180.0 / Math.PI;

    var re = RE / GRID;
    var slat1 = SLAT1 * DEGRAD;
    var slat2 = SLAT2 * DEGRAD;
    var olon = OLON * DEGRAD;
    var olat = OLAT * DEGRAD;

    var sn =
      Math.tan(Math.PI * 0.25 + slat2 * 0.5) /
      Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
    var sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;
    var ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
    ro = (re * sf) / Math.pow(ro, sn);
    var rs = {};
    if (code == "toXY") {
      rs["lat"] = v1;
      rs["lng"] = v2;
      var ra = Math.tan(Math.PI * 0.25 + v1 * DEGRAD * 0.5);
      ra = (re * sf) / Math.pow(ra, sn);
      var theta = v2 * DEGRAD - olon;
      if (theta > Math.PI) theta -= 2.0 * Math.PI;
      if (theta < -Math.PI) theta += 2.0 * Math.PI;
      theta *= sn;
      rs["x"] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
      rs["y"] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
    } else {
      rs["x"] = v1;
      rs["y"] = v2;
      var xn = v1 - XO;
      var yn = ro - v2 + YO;
      ra = Math.sqrt(xn * xn + yn * yn);
      if (sn < 0.0) -ra;
      var alat = Math.pow((re * sf) / ra, 1.0 / sn);
      alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;

      if (Math.abs(xn) <= 0.0) {
        theta = 0.0;
      } else {
        if (Math.abs(yn) <= 0.0) {
          theta = Math.PI * 0.5;
          if (xn < 0.0) -theta;
        } else theta = Math.atan2(xn, yn);
      }
      var alon = theta / sn + olon;
      rs["lat"] = alat * RADDEG;
      rs["lng"] = alon * RADDEG;
    }
    return rs;
  }
  render() {
    const {
      temp,
      weathersymbol,
      temp_kor,
      hum_kor,
      hum,
      onehourweathersymbol,
      sixhourweathersymbol,
      twelvehourweathersymbol,
      lowtemp,
      hightemp,
    } = this.state;
    return weathersymbol == null ? (
      <Loading />
    ) : (
      <Weather
        temp={temp}
        weathersymbol={weathersymbol}
        temp_kor={temp_kor}
        hum_kor={hum_kor}
        hum={hum}
        onehourweathersymbol={onehourweathersymbol}
        sixhourweathersymbol={sixhourweathersymbol}
        twelvehourweathersymbol={twelvehourweathersymbol}
        lowtemp={lowtemp}
        hightemp={hightemp}
      />
    );
  }
}
