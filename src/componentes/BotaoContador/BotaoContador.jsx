import {useState} from "react";

const BotaoContador = () => {
const [numero, setNumero] = useState(0);

const incrementar = () => {
setNumero(numero + 1);
};

return <button onClick={incrementar}>Contador é: {numero}</button>

};
export default BotaoContador;
