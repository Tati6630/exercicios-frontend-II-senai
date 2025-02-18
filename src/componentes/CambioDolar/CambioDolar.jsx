import { useState } from "react"

const CambioDolar = () => {
    const [real, setReal] = useState(" ");
    const [dolar, setDolar] = useState(" ");
    const taxaDolar = 5.00;

    const converteParaDolar = (e) => {
       setDolar(e.target.value);
       setReal(e.target.value / taxaDolar);
    };

    const converteParaReal = (e) => {
        setReal(e.target.value);
        setDolar(e.target.value * taxaDolar);
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
                value={dolar}
                onChange={converteParaDolar}
                style={{ margin: '5px' }}
            />

            <strong> dólares </strong>

        </>
    );
};
export default CambioDolar; 



