import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import UsuarioContext from "./UsuarioContext";

export default function DatosA() {
  const [foto, setFoto] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [carrera, setCarrera] = useState(null);
  const [usuario, setUsuario] = useState(null);

  const { codigo, nip, setCodigo, setNip } = useContext(UsuarioContext);

  useEffect(() => {
    var fotoXhttp = new XMLHttpRequest();

    fotoXhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        setFoto(this.responseText);
      }
    };

    fotoXhttp.open(
      "GET",
      `http://148.202.152.33/cucei/fotoA.php?codigo=${codigo}`,
      true
    );
    fotoXhttp.send();
  }, []);

  return (
    <View>
      <Text>DatosA</Text>
      {foto ? (
        <Image source={{ uri: foto }} style={{ width: 200, height: 200 }} />
      ) : (
        <Text>No foto</Text>
      )}
      {console.log(foto)}
    </View>
  );
}
