import { View, Text } from "react-native";
import React from "react";

const Clase = ({ datos }) => {
  return (
    <View
      style={{ borderWidth: 2, borderColor: "black", backgroundColor: "grey" }}
    >
      <Text style={{ color: "white" }}>{datos.nombre_materia}</Text>
      <Text style={{ color: "white" }}>{datos.profesor}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "white", padding: 2 }}>{datos.horario}</Text>
        <Text style={{ color: "white", padding: 2 }}>{datos.dias}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "white", padding: 2 }}>{datos.edificio}</Text>
        <Text style={{ color: "white", padding: 2 }}>{datos.aula}</Text>
      </View>
    </View>
  );
};

export default Clase;
