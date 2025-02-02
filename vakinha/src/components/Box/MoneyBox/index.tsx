import { useState } from "react";
import { Container, TitleGanhos,TitleData, TitleMoney, RowTitle, RowMoney, Icon, MaskedText } from "./styles";
import { TouchableOpacity } from "react-native";

type Props ={
    titleganhos: string;
    titledata: string;
    titlemoney: string;
}

export function MoneyBox({ titleganhos, titledata, titlemoney}: Props){

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = (): void => {
    setIsVisible((prevState) => !prevState);
  };
    //Visibilidade em forma de asteristico
    const maskMoney = (money: string): string => {
      return money.replace(/./g, '*'); 
    };
    return (
      <Container>
      <RowTitle>
        <TitleGanhos>{titleganhos}</TitleGanhos>
        <TitleData>{titledata}</TitleData>
      </RowTitle>

      <RowMoney>
        <TitleMoney>
          R$
          {isVisible ? (
            <>{titlemoney}</>
          ) : (
            <MaskedText>{maskMoney(titlemoney)}</MaskedText> // Aplica estilo cinza nos asteriscos
          )}
        </TitleMoney>

        <TouchableOpacity onPress={toggleVisibility}>
          <Icon name={isVisible ? "eye-off" : "eye"} size={35} />
        </TouchableOpacity>
      </RowMoney>
    </Container>
    )
}