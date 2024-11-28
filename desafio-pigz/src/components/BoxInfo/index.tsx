import { Container, TitleGanhos,TitleData, TitleMoney, RowTitle, RowMoney, Icon } from "./styles";

type Props ={
    titleganhos: string;
    titledata: string;
    titlemoney: string;
}

export function BoxInfo({ titleganhos, titledata, titlemoney}: Props){
    return (
        <Container>
            <RowTitle>

            <TitleGanhos>
             {titleganhos}
            </TitleGanhos>

            <TitleData>
              {titledata}
            </TitleData>

            </RowTitle>

            <RowMoney>
            <TitleMoney>
              {titlemoney}
            </TitleMoney>

            <Icon name="eye" size={35} />

            </RowMoney>
        </Container>
    )
}