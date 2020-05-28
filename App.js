import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Appbar, Button } from "react-native-paper";

import DisplayLove from "./components/DisplayLove";

class App extends React.Component {
  state = {
    fname: "",
    sname: "",
    result: "loading",
  };

  submit() {
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
      {
        headers: {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "3e20b2392cmsh8ac012d1fc98d0bp15404ajsn97853ae48631",
        },
      }
    )
      .then((data) => data.json())
      .then((data2) => {
        this.setState({
          result: data2,
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Love % Calculator"
            style={{ alignItems: "center" }}
          />
        </Appbar.Header>
        <TextInput
          label="Person 1 (name)"
          value={this.state.fname}
          onChangeText={(text) => this.setState({ fname: text })}
        />
        <TextInput
          label="Person 2 (name)"
          value={this.state.sname}
          onChangeText={(text) => this.setState({ sname: text })}
        />
        <Button
          mode="contained"
          style={{ margin: 15 }}
          onPress={() => this.submit()}
        >
          Calculate
        </Button>
        <DisplayLove data={this.state.result} />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
