import { useState } from "react"

const Diminuir = () => {
    const [num1, setNumero1] = useState(0);
    const [num2, setNumero2] = useState(0);

    const [resultado, setResultado] = useState(0);

    const calcular = () => {
        setResultado(+num1 - +num2);
    };

    return (
        <>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNumero1(e.target.value)}
                style={{ margin: '5px' }}
            />

            <strong> - </strong>

            <input
                type="number"
                value={num2}
                onChange={(e) => setNumero2(e.target.value)}
                style={{ margin: '5px' }}
            />
            <button onClick={calcular} style={{ margin: '5px' }}>Diminuir</button> = <strong style={{ fontSize: '20px' }}>{resultado}</strong>

        </>
    );
};
export default Diminuir;