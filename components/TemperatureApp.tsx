import { styles } from "@/styles/global-styles";
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function TemperatureApp() {
  const [temp, setTemp] = useState(18);
  const toogleTemp = (operator: string) => {
    console.log("Aló policia");
    // azul para menos de 15,
    // verde para 15-25,
    // y rojo para más de 25.
    switch (operator) {
      case "+":
        console.log("Temperatura subiendo");
        setTemp(temp + 1);
        break;
      case "-":
        console.log("Temperatura bajando");
        setTemp(temp - 1);
        break;
      default:
        console.error("Huh?");
        break;
    }
  };
  return (
    <View style={{ backgroundColor: "" }}>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Temperature App
        </Text>

        <Text
          style={{
            fontSize: 60,
            fontWeight: "bold",
            textAlign: "center",
            color: temp < 15 ? "blue" : temp <= 25 ? "green" : "red",
            marginVertical: 50,
          }}
        >
          {temp}
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Pressable
            style={({ pressed }) => ({
              width: 70,
              height: 70,
              opacity: pressed ? 0.8 : 1,
            })}
            onPress={() => {
              toogleTemp("-");
            }}
          >
            <Text style={styles.tempBtns}>-</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => ({
              width: 70,
              height: 70,
              opacity: pressed ? 0.8 : 1,
            })}
            onPress={() => {
              toogleTemp("+");
            }}
          >
            <Text style={styles.tempBtns}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
