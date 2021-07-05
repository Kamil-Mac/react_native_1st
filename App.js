import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Focus from "./src/features/Focus";

export default function App() {
  const [focusSubject, setFocuesSubject] = useState(null);
//mozna normalnie uzywac hookow
  return (
    <View style={styles.container}>
      {focusSubject ? <Text>Testing if condition</Text> : <Focus addSubject={setFocuesSubject} />}
    </View>
  );
}
//"imitacja css"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#252250',
  },
});
