import { MoneyBox } from "../../components/Box/MoneyBox";
import { Container, Title } from "./styles";

export function Home(){
// Formata a data do dia no formato dd/mm
  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    return `${day}/${month}`;
  };
    return(
        <Container>
            <Title>
                Visão geral
            </Title>
            <MoneyBox 
            titledata={getCurrentDate()} 
            titleganhos="Saldo" 
            titlemoney="250"/>
        </Container>
    )
}