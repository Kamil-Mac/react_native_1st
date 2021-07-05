import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../components/RoundedButton";

const Focus = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on??</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{ flex: 1, marginRight: 25 }} onSubmitEditing={({nativeEvent}) => {props.addSubject(nativeEvent.text)}}/>
          <RoundedButton title='+' size= {50} onPress={()=> 'null'}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 15,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Focus;
