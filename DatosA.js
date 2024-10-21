import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import UsuarioContext from "./UsuarioContext";

export default function DatosA() {
  const [foto, setFoto] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [carrera, setCarrera] = useState(null);
  const [tipoUsuario, setTipoUsuario] = useState(null);
  const [estatus, setEstatus] = useState(null);

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

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
          const datos = JSON.parse(xhttp.responseText);

          setNombre(datos.nombre);
          setCarrera(datos.carrera[0]);
          setTipoUsuario(datos.tipoUsuario);
          setEstatus(datos.estatus);
      }
    };

    xhttp.open(
      "GET",
      `http://148.202.152.33/cucei/credenciales.php?codigo=${codigo}&nip=${nip}`,
      true
    );
    xhttp.send();
  }, []);

  return (
    <View>
      <Text>DatosA</Text>
      {foto ? (
        <Image source={{ uri: foto }} style={{ width: 200, height: 200 }} />
      ) : (
        <Text>No foto</Text>
      )}

      <View>
        <Text>Datos Alumno:</Text>
        <Text>Codigo: {codigo}</Text>
        <Text>Nombre: {nombre}</Text>
        <Text>Carrera: {carrera && carrera.descripcion}</Text>
        <Text>Ciclo Ingreso: {carrera && carrera.cicloIngreso}</Text>
        <Text>Escuela: {carrera && carrera.escuela}</Text>
        <Text>Ultimo Ciclo: {carrera && carrera.ultimoCiclo}</Text>
        <Text>Tipo de Usuario: {tipoUsuario}</Text>
        <Text>Estatus: {estatus}</Text>
      </View>
    </View>
  );
}
