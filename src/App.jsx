import AdicionarNome from "./componentes/AdicionarNome/AdicionarNome";
import BotaoContador from "./componentes/BotaoContador/BotaoContador";
import CalculoIMC from "./componentes/CalculoIMC/CalculoIMC";
import CambioDolar from "./componentes/CambioDolar/CambioDolar";
import CambioEuro from "./componentes/CambioEuro/CambioEuro";
import Contador from "./componentes/Contador/Contador";
import Diminuir from "./componentes/Diminuir/Diminuir";
import Dividir from "./componentes/Dividir/Dividir";
import Multiplicar from "./componentes/Multiplicar/Multiplicar";
import RemoverNome from "./componentes/RemoverNome/RemoverNome";
import Somar from "./componentes/Somar/Somar";


function App() {
  return (
    <>
      1. Crie um componente chamado BotaoContador que contém um botão com a descrição
      "Contador é: xx", ao clicar no botão o número deve ser incrementado em 1.
      <br />
      <br />
      <BotaoContador />
      <br />
      <br />
      <br />
      2. Crie um componente chamado Contador que contém dois botões, um para somar 1 ao ser
      clicado e outro para diminuir 1 ao ser clicado, e mostre o valor atual no meio entre os dois botões.
      <br />
      <br />
      <Contador />
      <br />
      <br />
      <br />
      3. Crie um componente chamado Somar que contém dois campos tipo numérico, e um botão "Somar" que
      ao ser clicado deve somar os dois valores e mostrar o resultado.
      <br />
      <br />
      <Somar />
      <br />
      <br />
      <br />
      4. Crie um componente chamado Diminuir que contém dois campos tipo numérico e um botão "Diminuir"
      que, ao ser clicado deve diminuir os dois valores e mostrar o resultado.
      <br />
      <br />
      <Diminuir />
      <br />
      <br />
      <br />
      5. Crie um componente chamado Multiplicar que contém dois campos tipo numérico, e um botão
      "Multiplicar" que ao ser clicado deve multiplicar os dois valores e mostrar o resultado.
      <br />
      <br />
      <Multiplicar />
      <br />
      <br />
      <br />
      6. Crie um componente chamado Dividir que contém dois campos tipo numérico, e um botão "Dividir"
      que ao ser clicado deve multiplicar os dois valores e mostrar o resultado.
      <br />
      <br />
      <Dividir />
      <br />
      <br />
      <br />
      7. Considere o valor do dólar igual a R$5,00. Crie um componente chamado CambioDolar que contém
      dois campos tipo numérico, ao ser digitado a valor em real deve ser calculado o valor em dólar e 
      o contrário também deve ocorrer.
      <br />
      <br />
      <CambioDolar />
      <br />
      <br />
      <br />
      8. Considere o valor do euro igual a R$5,50. Crie um componente chamado CambioEuro que contém 
      dois campos tipo numérico, ao ser digitado a valor em real deve ser calculado o valor em euro e o 
      contrário também deve ocorrer.
      <br />
      <br />
      <CambioEuro />
      <br />
      <br />
      <br />
      9. Considere a fórmula do IMC = peso / (altura * altura) e status: menor 18,5 = "Abaixo do peso",
      menor 25 = "Peso normal", menor 30 = "Sobrepeso" e acima de 30 = "Obeso" . Crie um componente chamado 
      CalculoIMC que contém dois campos tipo numérico, e um botão "Calcular IMC" que ao ser clicado 
      deve fazer o cálculo e mostrar o resultado.
      <br />
      <br />
      <CalculoIMC />
      <br />
      <br />
      <br />
      10.Crie um componente chamado AdicionarNome que contém um campo do tipo texto e um botão "Adicionar" 
      que ao ser clicado deve adicionar o nome digitado em uma lista e mostrar abaixo.
      <br />
      <br />
      <AdicionarNome />
      <br />
      <br />
      <br />
      11.Crie um componente chamado RemoverNome que contém uma lista de nomes com o botão "Remover" ao lado 
      que ao ser clicado deve remover o respectivo nome da lista.
      <br />
      <br />
      <RemoverNome /> 










    </>
  );
};
export default App;
