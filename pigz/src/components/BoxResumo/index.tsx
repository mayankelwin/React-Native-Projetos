import { BoxCards, Container, Title, Cards, TextCards, TextCardsNunber } from "./styles";

type Props = {
    
    
    nunber1: string;
    nunber2: string;
    nunber3: string;

}

export function BoxResumo({nunber1, nunber2 , nunber3}: Props){
    return(
        <Container>
            <Title>
                Resumos das Entregas
            </Title>

            <BoxCards>
             <Cards>
                <TextCards>
                    Aceitas
                </TextCards>
                <TextCardsNunber>
                    {nunber1}
                </TextCardsNunber>

             </Cards>
             
             <Cards>
             <TextCards>
                    Rejeitados
                </TextCards>

                <TextCardsNunber>
                   {nunber2}
                </TextCardsNunber>
             </Cards>
             
             <Cards>
             <TextCards>
                    Total
                </TextCards>
                <TextCardsNunber>
                   {nunber3 }
                </TextCardsNunber>
             </Cards>
            </BoxCards>
        </Container>
    )
}