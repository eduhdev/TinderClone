import React from "react";
import Index from "./src";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

function App() {
  return <Index />;
}

export default App;
