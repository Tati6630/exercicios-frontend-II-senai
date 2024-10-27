import { useState } from "react"

const CambioEuro = () => {
    const [real, setReal] = useState(" ");
    const [euro, setEuro] = useState(" ");
    const taxaEuro = 5.50;

    const converteParaEuro = (e) => {
        setEuro(e.target.value);
        setReal(e.target.value / taxaEuro);
    };

    const converteParaReal = (e) => {
        setReal(e.target.value);
        setEuro(e.target.value * taxaEuro);
    };

    return (
        <>
            <input
                type="number"
                value={real}
                onChange={converteParaReal}
                style={{ margin: '5px' }}
            />

            <strong> reais é igual a </strong>

            <input
                type="number"
                value={euro}
                onChange={converteParaEuro}
                style={{ margin: '5px' }}
            />

            <strong> euros </strong>

        </>
    );
};
export default CambioEuro;