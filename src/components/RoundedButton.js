import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
    //console.log(style);
  return (
    <TouchableOpacity style={[styles(size).radius, style]}>
      <Text style={[styles(size).text, textStyle]} onPress={props.onPress}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      borderColor:"#fff",
      borderWidth: 2,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: size / 3,
    },
  });

export default RoundedButton;
