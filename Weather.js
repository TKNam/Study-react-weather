import React from "react";
import { Image, StyleSheet, View, Text, StatusBar } from "react-native";
import propTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  clearsky_day: {
    imagepath: require("./weathericon/png/clearsky_day.png"),
    gradient: ["#30e8bf", "#ff8235"],
  },
  clearsky_night: {
    imagepath: require("./weathericon/png/clearsky_night.png"),
    gradient: ["#0f2027", "#203a43", "#2c5364"],
  },
  clearsky_polartwilight: {
    imagepath: require("./weathericon/png/clearsky_polartwilight.png"),
    gradient: ["#30e8bf", "#ff8235"],
  },
  cloudy: {
    imagepath: require("./weathericon/png/cloudy.png"),
    gradient: ["#304352", "#d7d2cc"],
  },
  fair_day: {
    imagepath: require("./weathericon/png/fair_day.png"),
    gradient: ["#fceabb", "#f8b500"],
  },
  fair_night: {
    imagepath: require("./weathericon/png/fair_night.png"),
    gradient: ["#0f2027", "#203a43", "#2c5364"],
  },
  fair_polartwilight: {
    imagepath: require("./weathericon/png/fair_polartwilight.png"),
    gradient: ["#fceabb", "#f8b500"],
  },
  fog: {
    imagepath: require("./weathericon/png/fog.png"),
    gradient: ["#8e9eab", "#eef2f3"],
  },
  heavyrain: {
    imagepath: require("./weathericon/png/heavyrain.png"),
    gradient: ["#403b4a", "#e7e9bb"],
  },
  heavyrainandthunder: {
    imagepath: require("./weathericon/png/heavyrainandthunder.png"),
    gradient: ["#403b4a", "#e7e9bb"],
  },
  heavyrainshowers_day: {
    imagepath: require("./weathericon/png/heavyrainshowers_day.png"),
    gradient: ["#403b4a", "#e7e9bb"],
  },
  heavyrainshowers_night: {
    imagepath: require("./weathericon/png/heavyrainshowers_night.png"),
    gradient: ["#283048", "#859398"],
  },
  heavyrainshowers_polartwilight: {
    imagepath: require("./weathericon/png/heavyrainshowers_polartwilight.png"),
    gradient: ["#403b4a", "#e7e9bb"],
  },
  heavyrainshowersandthunder_day: {
    imagepath: require("./weathericon/png/heavyrainshowersandthunder_day.png"),
    gradient: ["#403b4a", "#e7e9bb"],
  },
  heavyrainshowersandthunder_night: {
    imagepath: require("./weathericon/png/heavyrainshowersandthunder_night.png"),
    gradient: ["#283048", "#859398"],
  },
  heavyrainshowersandthunder_polartwilight: {
    imagepath: require("./weathericon/png/heavyrainshowersandthunder_polartwilight.png"),
    gradient: ["#403b4a", "#e7e9bb"],
  },
  heavysleet: {
    imagepath: require("./weathericon/png/heavysleet.png"),
    gradient: ["#283048", "#859398"],
  },
  heavysleetandthunder: {
    imagepath: require("./weathericon/png/heavysleetandthunder.png"),
    gradient: ["#283048", "#859398"],
  },
  heavysleetshowers_day: {
    imagepath: require("./weathericon/png/heavysleetshowers_day.png"),
    gradient: ["#403b4a", "#e7e9bb"],
  },
  heavysleetshowers_night: {
    imagepath: require("./weathericon/png/heavysleetshowers_night.png"),
    gradient: ["#283048", "#859398"],
  },
  heavysleetshowers_polartwilight: {
    imagepath: require("./weathericon/png/heavysleetshowers_polartwilight.png"),
    gradient: ["#403b4a", "#e7e9bb"],
  },
  heavysleetshowersandthunder_day: {
    imagepath: require("./weathericon/png/heavysleetshowersandthunder_day.png"),
    gradient: ["#403b4a", "#e7e9bb"],
  },
  heavysleetshowersandthunder_night: {
    imagepath: require("./weathericon/png/heavysleetshowersandthunder_night.png"),
    gradient: ["#283048", "#859398"],
  },
  heavysleetshowersandthunder_polartwilight: {
    imagepath: require("./weathericon/png/heavysleetshowersandthunder_polartwilight.png"),
    gradient: ["#403b4a", "#e7e9bb"],
  },
  heavysnow: {
    imagepath: require("./weathericon/png/heavysnow.png"),
    gradient: ["#616161", "#9bc5c3"],
  },
  heavysnowandthunder: {
    imagepath: require("./weathericon/png/heavysnowandthunder.png"),
    gradient: ["#616161", "#9bc5c3"],
  },
  heavysnowshowers_day: {
    imagepath: require("./weathericon/png/heavysnowshowers_day.png"),
    gradient: ["#616161", "#9bc5c3"],
  },
  heavysnowshowers_night: {
    imagepath: require("./weathericon/png/heavysnowshowers_night.png"),
    gradient: ["#485563", "#29323c"],
  },
  heavysnowshowers_polartwilight: {
    imagepath: require("./weathericon/png/heavysnowshowers_polartwilight.png"),
    gradient: ["#616161", "#9bc5c3"],
  },
  heavysnowshowersandthunder_day: {
    imagepath: require("./weathericon/png/heavysnowshowersandthunder_day.png"),
    gradient: ["#616161", "#9bc5c3"],
  },
  heavysnowshowersandthunder_night: {
    imagepath: require("./weathericon/png/heavysnowshowersandthunder_night.png"),
    gradient: ["#485563", "#29323c"],
  },
  heavysnowshowersandthunder_polartwilight: {
    imagepath: require("./weathericon/png/heavysnowshowersandthunder_polartwilight.png"),
    gradient: ["#616161", "#9bc5c3"],
  },
  lightrain: {
    imagepath: require("./weathericon/png/lightrain.png"),
    gradient: ["#4ecdc4", "#556270"],
  },
  lightrainandthunder: {
    imagepath: require("./weathericon/png/lightrainandthunder.png"),
    gradient: ["#73c8a9", "#373b44"],
  },
  lightrainshowers_day: {
    imagepath: require("./weathericon/png/lightrainshowers_day.png"),
    gradient: ["#536976", "#292e49"],
  },
  lightrainshowers_night: {
    imagepath: require("./weathericon/png/lightrainshowers_night.png"),
    gradient: ["#536976", "#292e49"],
  },
  lightrainshowers_polartwilight: {
    imagepath: require("./weathericon/png/lightrainshowers_polartwilight.png"),
    gradient: ["#536976", "#292e49"],
  },
  lightrainshowersandthunder_day: {
    imagepath: require("./weathericon/png/lightrainshowersandthunder_day.png"),
    gradient: ["#e9d362", "#333333"],
  },
  lightrainshowersandthunder_night: {
    imagepath: require("./weathericon/png/lightrainshowersandthunder_night.png"),
    gradient: ["#e9d362", "#333333"],
  },
  lightrainshowersandthunder_polartwilight: {
    imagepath: require("./weathericon/png/lightrainshowersandthunder_polartwilight.png"),
    gradient: ["#e9d362", "#333333"],
  },
  lightsleet: {
    imagepath: require("./weathericon/png/lightsleet.png"),
    gradient: ["#bbd2c5", "#536976"],
  },
  lightsleetandthunder: {
    imagepath: require("./weathericon/png/lightsleetandthunder.png"),
    gradient: ["#e9d362", "#333333"],
  },
  lightsleetshowers_day: {
    imagepath: require("./weathericon/png/lightsleetshowers_day.png"),
    gradient: ["#bbd2c5", "#536976"],
  },
  lightsleetshowers_night: {
    imagepath: require("./weathericon/png/lightsleetshowers_night.png"),
    gradient: ["#1f1c2c", "#928dab"],
  },
  lightsleetshowers_polartwilight: {
    imagepath: require("./weathericon/png/lightsleetshowers_polartwilight.png"),
    gradient: ["#bbd2c5", "#536976"],
  },
  lightsnow: {
    imagepath: require("./weathericon/png/lightsnow.png"),
    gradient: ["#bbd2c5", "#536976"],
  },
  lightsnowandthunder: {
    imagepath: require("./weathericon/png/lightsnowandthunder.png"),
    gradient: ["#649173", "#dbd5a4"],
  },
  lightsnowshowers_day: {
    imagepath: require("./weathericon/png/lightsnowshowers_day.png"),
    gradient: ["#c6ffdd", "#fbd786", "f7797d"],
  },
  lightsnowshowers_night: {
    imagepath: require("./weathericon/png/lightsnowshowers_night.png"),
    gradient: ["#373b44", "#4286f4"],
  },
  lightsnowshowers_polartwilight: {
    imagepath: require("./weathericon/png/lightsnowshowers_polartwilight.png"),
    gradient: ["#c6ffdd", "#fbd786", "f7797d"],
  },
  lightssleetshowersandthunder_day: {
    imagepath: require("./weathericon/png/lightssleetshowersandthunder_day.png"),
    gradient: ["#108dc7", "#ef8e38"],
  },
  lightssleetshowersandthunder_night: {
    imagepath: require("./weathericon/png/lightssleetshowersandthunder_night.png"),
    gradient: ["#003973", "#e5e5be"],
  },
  lightssleetshowersandthunder_polartwilight: {
    imagepath: require("./weathericon/png/lightssleetshowersandthunder_polartwilight.png"),
    gradient: ["#108dc7", "#ef8e38"],
  },
  lightssnowshowersandthunder_day: {
    imagepath: require("./weathericon/png/lightssnowshowersandthunder_day.png"),
    gradient: ["#108dc7", "#ef8e38"],
  },
  lightssnowshowersandthunder_night: {
    imagepath: require("./weathericon/png/lightssnowshowersandthunder_night.png"),
    gradient: ["#003973", "#e5e5be"],
  },
  lightssnowshowersandthunder_polartwilight: {
    imagepath: require("./weathericon/png/lightssnowshowersandthunder_polartwilight.png"),
    gradient: ["#108dc7", "#ef8e38"],
  },
  partlycloudy_day: {
    imagepath: require("./weathericon/png/partlycloudy_day.png"),
    gradient: ["#e6dada", "#274046"],
  },
  partlycloudy_night: {
    imagepath: require("./weathericon/png/partlycloudy_night.png"),
    gradient: ["#373b44", "#4286f4"],
  },
  partlycloudy_polartwilight: {
    imagepath: require("./weathericon/png/partlycloudy_polartwilight.png"),
    gradient: ["#e6dada", "#274046"],
  },
  rain: {
    imagepath: require("./weathericon/png/rain.png"),
    gradient: ["#bdc3c7", "#2c3e50"],
  },
  rainandthunder: {
    imagepath: require("./weathericon/png/rainandthunder.png"),
    gradient: ["#636363", "#a2ab58"],
  },
  rainshowers_day: {
    imagepath: require("./weathericon/png/rainshowers_day.png"),
    gradient: ["#e6dada", "#274046"],
  },
  rainshowers_night: {
    imagepath: require("./weathericon/png/rainshowers_night.png"),
    gradient: ["#373b44", "#4286f4"],
  },
  rainshowers_polartwilight: {
    imagepath: require("./weathericon/png/rainshowers_polartwilight.png"),
    gradient: ["#e6dada", "#274046"],
  },
  rainshowersandthunder_day: {
    imagepath: require("./weathericon/png/rainshowersandthunder_day.png"),
    gradient: ["#ba8b02", "#181818"],
  },
  rainshowersandthunder_night: {
    imagepath: require("./weathericon/png/rainshowersandthunder_night.png"),
    gradient: ["#232526", "#414345"],
  },
  rainshowersandthunder_polartwilight: {
    imagepath: require("./weathericon/png/rainshowersandthunder_polartwilight.png"),
    gradient: ["#ba8b02", "#181818"],
  },
  sleet: {
    imagepath: require("./weathericon/png/sleet.png"),
    gradient: ["#bdc3c7", "#2c3e50"],
  },
  sleetandthunder: {
    imagepath: require("./weathericon/png/sleetandthunder.png"),
    gradient: ["#636363", "#a2ab58"],
  },
  sleetshowers_day: {
    imagepath: require("./weathericon/png/sleetshowers_day.png"),
    gradient: ["#bdc3c7", "#2c3e50"],
  },
  sleetshowers_night: {
    imagepath: require("./weathericon/png/sleetshowers_night.png"),
    gradient: ["#373b44", "#4286f4"],
  },
  sleetshowers_polartwilight: {
    imagepath: require("./weathericon/png/sleetshowers_polartwilight.png"),
    gradient: ["#bdc3c7", "#2c3e50"],
  },
  sleetshowersandthunder_day: {
    imagepath: require("./weathericon/png/sleetshowersandthunder_day.png"),
    gradient: ["#ba8b02", "#181818"],
  },
  sleetshowersandthunder_night: {
    imagepath: require("./weathericon/png/sleetshowersandthunder_night.png"),
    gradient: ["#232526", "#414345"],
  },
  sleetshowersandthunder_polartwilight: {
    imagepath: require("./weathericon/png/sleetshowersandthunder_polartwilight.png"),
    gradient: ["#ba8b02", "#181818"],
  },
  snow: {
    imagepath: require("./weathericon/png/snow.png"),
    gradient: ["#bdc3c7", "#2c3e50"],
  },
  snowandthunder: {
    imagepath: require("./weathericon/png/snowandthunder.png"),
    gradient: ["#636363", "#a2ab58"],
  },
  snowshowers_day: {
    imagepath: require("./weathericon/png/snowshowers_day.png"),
    gradient: ["#e6dada", "#274046"],
  },
  snowshowers_night: {
    imagepath: require("./weathericon/png/snowshowers_night.png"),
    gradient: ["#373b44", "#4286f4"],
  },
  snowshowers_polartwilight: {
    imagepath: require("./weathericon/png/snowshowers_polartwilight.png"),
    gradient: ["#e6dada", "#274046"],
  },
  snowshowersandthunder_day: {
    imagepath: require("./weathericon/png/snowshowersandthunder_day.png"),
    gradient: ["#ba8b02", "#181818"],
  },
  snowshowersandthunder_night: {
    imagepath: require("./weathericon/png/snowshowersandthunder_night.png"),
    gradient: ["#232526", "#414345"],
  },
  snowshowersandthunder_polartwilight: {
    imagepath: require("./weathericon/png/snowshowersandthunder_polartwilight.png"),
    gradient: ["#ba8b02", "#181818"],
  },
};
const Weather = (props) => {
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
  } = props;
  return (
    <LinearGradient
      colors={weatherOptions[weathersymbol].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.firstcontainer}>
        <Image source={weatherOptions[weathersymbol].imagepath} />
        <Text style={styles.temp}>{weathersymbol}</Text>
      </View>
      <View style={styles.secondcontainer}>
        <View style={styles.onehour}>
          <View style={styles.icon}>
            <Image
              source={weatherOptions[onehourweathersymbol].imagepath}
              style={styles.icon}
            />
          </View>
          <Text style={styles.name}>1hour after</Text>
        </View>
        <View style={styles.sixhour}>
          <View style={styles.icon}>
            <Image
              source={weatherOptions[sixhourweathersymbol].imagepath}
              style={styles.icon}
            />
          </View>
          <Text style={styles.name}>6hour after</Text>
        </View>
        <View style={styles.twelvehour}>
          <View style={styles.icon}>
            <Image
              source={weatherOptions[twelvehourweathersymbol].imagepath}
              style={styles.icon}
            />
          </View>
          <Text style={styles.name}>12hour after</Text>
        </View>
        <Text style={styles.tempText}>
          <Text>
            min : {lowtemp}˚C{"\n"}
          </Text>
          <Text>
            max : {hightemp}˚C{"\n"}
          </Text>
        </Text>
      </View>
      <View style={{ ...styles.thirdcontainer, ...styles.textcontainer }}>
        <View style={styles.dividecontainer}>
          <View style={styles.halfhalfcontainer}>
            <Text style={styles.nation}>노르웨이</Text>
            <Text style={styles.temp}>기온 : {temp}˚C</Text>
            <Text style={styles.temp}>습도 : {hum}%</Text>
          </View>
          <View style={styles.halfhalfcontainer}>
            <Text style={styles.nation}>한국</Text>
            <Text style={styles.temp}>기온 : {temp_kor}˚C</Text>
            <Text style={styles.temp}>습도 : {hum_kor}%</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

Weather.propTypes = {
  temp: propTypes.number,
  latitude: propTypes.number,
  longitude: propTypes.number,
  temp_kor: propTypes.string,
  hum_kor: propTypes.string,
  hum: propTypes.number,
  weathersymbol: propTypes.string,
  onehourweathersymbol: propTypes.string,
  sixhourweathersymbol: propTypes.string,
  twelvehourweathersymbol: propTypes.string,
  lowtemp: propTypes.number,
  hightemp: propTypes.number,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 24,
    color: "white",
  },
  firstcontainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  secondcontainer: {
    flex: 1,
    flexDirection: "row",
  },
  thirdcontainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  textcontainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  halfhalfcontainer: {
    flex: 1,
    display: "flex",
    color: "white",
  },
  dividecontainer: {
    flexDirection: "row",
  },
  nation: {
    alignItems: "flex-start",
    justifyContent: "flex-end",
    fontSize: 24,
    color: "white",
    borderBottomWidth: 2,
    borderBottomColor: "white",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 50,
    paddingBottom: 13,
  },
  onehour: {
    flex: 1,
  },
  sixhour: {
    flex: 1,
  },
  twelvehour: {
    flex: 1,
  },
  name: {
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 13,
  },
  icon: {
    marginTop: 10,
    width: 100,
    height: 100,
    resizeMode: "stretch",
  },
  tempText: {
    flex: 1,
    fontSize: 13,
    marginTop: 70,
    color: "white",
    marginLeft: 10,
  },
});
export default Weather;
