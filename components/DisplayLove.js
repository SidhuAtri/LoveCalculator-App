import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DisplayLove = (props) => {
  if (props.data === "loading") {
    return <Text style={styles.text}>Waiting for Input...</Text>;
  }
  if (props.data.message) {
    return <Text style={styles.text}>Sorry! Something went wrong</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{props.data.percentage} %</Text>
        <Text style={styles.text}>" {props.data.result} "</Text>
      </View>
    );
  }
};

export default DisplayLove;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
  },
});
