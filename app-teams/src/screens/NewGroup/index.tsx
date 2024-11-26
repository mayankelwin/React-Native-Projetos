import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Imput";
import { Container, Content, Icon, } from "./styles";

export function NewGroup() {
  const navigation = useNavigation();

  function handleNew(){
    navigation.navigate('players', {group:'Yan'})
  }
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
        title="Nova turma"
        subtitle="Crie a turma para adicionar as pessoas"
        />
 
       <Input 
       placeholder="Nome da Turma"
       />
        <Button 
        title='Criar'
        style={{marginTop:20}}
        onPress={handleNew}
        />
      </Content>
    </Container>
  );
}
