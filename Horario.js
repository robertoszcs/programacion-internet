import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Clase from "./Componentes/Clase";

const Horario = ({ route, navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const formdata = new FormData();
      formdata.append("codigo", route.params.codigo);
      formdata.append("nip", route.params.nip);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      let response = await fetch(
        "http://148.202.152.33/cucei/alumnoH.php",
        requestOptions
      );
      let text = await response.text();
      try {
        let json = JSON.parse(text);
        setData(json);
      } catch (jsonError) {
        console.error("Failed to parse JSON:", jsonError);
        console.error("Response text:", text);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 14 }}>{data.alumno}</Text>
        <Text>{data.campus}</Text>
        <View style={{flexDirection: "row"}}>
          <Text>{data.carrera}</Text>
          <Text>{data.ciclo}</Text>
        </View>
      </View>

      <FlatList 
        data={data.horario}   
        renderItem={({item}) => <Clase datos={item} />} 
      />

    </View>
  );
};

export default Horario;
