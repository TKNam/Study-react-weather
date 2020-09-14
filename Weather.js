import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import propTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

const weatherOptions = {
  cloudy: {
    iconName: "ios-cloudy-night",
    gradient: ["#654ea3", "#3b5998", "#eaafc8"],
  }, //all case 만들어
  sun: {
    iconName: "ios-sunny",
    gradient: ["#FF512F", "#F09819"],
  },
};

const Weather = (props) => {
  const {
    temp,
    latitude,
    longitude,
    weathersymbol,
    temp_kor,
    hum_kor,
    hum,
  } = props;
  return (
    <LinearGradient
      colors={weatherOptions["cloudy"].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfcontainer}>
        <Icon
          size={96}
          name={weatherOptions["cloudy"].iconName}
          color={"white"}
        />
        <Text style={styles.temp}>날씨코드 : {weathersymbol}</Text>
      </View>
      <View style={{ ...styles.halfcontainer, ...styles.textcontainer }}>
        <Text>
          위도 : {latitude}, 경도 : {longitude}
          {"\n"}
        </Text>
        <Text>노르웨이에서 측정한 기온 : {temp}˚C</Text>
        <Text>노르웨이에서 측정한 습도 : {hum}%</Text>
        <Text>한국에서 측정한 기온 : {temp_kor}˚C</Text>
        <Text>한국에서 측정한 습도 : {hum_kor}%</Text>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 32,
    color: "white",
  },
  halfcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textcontainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
export default Weather;
