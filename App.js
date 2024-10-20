import React, { createContext, useState } from "react";
import Login from "./Login";
import Horario from "./Horario";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DatosA from "./DatosA";
import UsuarioContext from "./UsuarioContext";

const Drawer = createDrawerNavigator();

export default function App() {
    UsuarioProvider = ({ children }) => {
    const [codigo, setCodigo] = useState("");
    const [nip, setNip] = useState("");

    return (
      <UsuarioContext.Provider value={{ codigo, nip, setCodigo, setNip }}>
        {children}
      </UsuarioContext.Provider>
    );
  };

  return (
    <UsuarioProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Horario" component={Horario} />
          <Drawer.Screen name="Datos" component={DatosA} />
        </Drawer.Navigator>
      </NavigationContainer>
    </UsuarioProvider>
  );
}
