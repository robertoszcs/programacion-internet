import { createContext } from "react";

const UsuarioContext = createContext({
    codigo: "",
    nip: "",
    setCodigo: () => {},
    setNip: () => {}
});
export default UsuarioContext;