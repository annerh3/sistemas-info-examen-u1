import { View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import TemperatureApp from "@/components/TemperatureApp";
import RandomColorApp from "@/components/RandomColorApp";

// AQUI ESTAN LAS DOS APLICACIONES.
// App1: TemperatureApp
// App2: RandomColorApp

const _layout = () => {
  const [color, setcolor] = useState("#121212");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: `${color}`,
      }}
    >
      {/* <TemperatureApp /> */}
      <RandomColorApp color={color} setcolor={setcolor}/>
      {/* <StatusBar style="dark" hidden={true} backgroundColor="transparent" /> */}
    </View>
  );
};

export default _layout;
