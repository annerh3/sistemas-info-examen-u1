import { styles } from "@/styles/global-styles";
import React, { useState } from "react";
import { Pressable, View, Text } from "react-native";

interface Props {
  color: string;
  setcolor: (color: string) => void;
}

const RandomColorApp = ({ color, setcolor }: Props) => {
  const generateHexColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const toggleColor = () => {
    console.log(`Boton 'Cambiar color' presionado`);
    const randomHexColor = generateHexColor();
    setcolor(randomHexColor);
  };
  return (
    <View>
      <View>
        <Pressable
          onPress={toggleColor}
          style={({ pressed }) => ({
            opacity: pressed ? 0.8 : 1,
          })}
        >
          <Text style={styles.changeColorBrn}>Cambiar Color</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RandomColorApp;
