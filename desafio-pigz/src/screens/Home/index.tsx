import { BoxEntregas } from "../../components/BoxEntregas";
import { BoxInfo } from "../../components/BoxInfo";
import { BoxResumo } from "../../components/BoxResumo";
import { Header } from "../../components/Header";
import { TabBar } from "../../components/CustomTabBar";
import { Container } from "./styles";

export function Home(){
    return(
        <Container>
            <Header title="Visâo geral" />
            <BoxInfo titleganhos=" Ganhos do dia" titledata="27 / 11" titlemoney="R$250"/>
            <BoxResumo nunber1="15" nunber2="5" nunber3="20" />
            <BoxEntregas />
            <TabBar />
        </Container>
    )
}