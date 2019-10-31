import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Platform
} from "react-native";

import logo from "../../assets/logo.png";

export default function pages() {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === "ios"}
      style={styles.container}
    >
      <Image source={logo} />

      <TextInput
        placeholder="Type your github User"
        placeholderTextColor="#999"
        autoCorrect={false}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SignIn</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 30
  },
  input: {
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15
  },
  button: {
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#df4723",
    borderRadius: 4,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});
