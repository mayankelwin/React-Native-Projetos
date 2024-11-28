import { ScrollView } from "react-native";
import { BoxEntregas } from "../../components/BoxEntregas";
import { BoxInfo } from "../../components/BoxInfo";
import { BoxResumo } from "../../components/BoxResumo";
import { Header } from "../../components/Header";
import { TabBar } from "../../components/TabBar";

import { Border, Container } from "./styles";

export function Home(){
    return(
        <Container>

            <Header title="Visâo geral" />
            <ScrollView showsVerticalScrollIndicator={false}>
            <BoxInfo titleganhos=" Ganhos do dia" titledata="27 / 11" titlemoney="250,50"/>
            <BoxResumo nunber1="15" nunber2="5" nunber3="20" />
            <BoxEntregas />
            </ScrollView>
          <Border></Border>
           
            <TabBar />

        </Container>
    )
}