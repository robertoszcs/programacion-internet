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
    fetch(`http://148.202.152.33/cucei/fotoA.php?codigo=${codigo}`)
      .then((res) => res.blob())
      .then((img) => {
        console.log(img)
        setFoto(img)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View>
      <Text>DatosA</Text>
      {foto != null && <Image source={{uri: foto}} width={200} height={200} />}
    </View>
  );
}
