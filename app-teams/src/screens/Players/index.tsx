import { useState } from "react";
import { FlatList } from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Filter } from "../../components/FIlter";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Imput";
import { Container, Form, HeaderList, NumberOfPlayer } from "./styles";
import { PlayerCard } from "../../components/PlayerCard";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";

export function Players() {
  const [team,setTeam] = useState('Time A');
const [players, setPlayers] = useState([])

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="Adicione Players e separe os times "
      />
<Form>

      <Input placeholder="Nome da pessoa" autoCorrect={false} />
      <ButtonIcon icon="add" />
</Form>
<HeaderList>
<FlatList 
data={['Time A', 'Time B']}
keyExtractor={item => item}
renderItem={({item}) => (
<Filter 
title={item}
isActive={item === team}
onPress={() => setTeam(item)}
/>
)}
horizontal
/>
<NumberOfPlayer>
  {players.length}
</NumberOfPlayer>
</HeaderList>

<FlatList 
data={players}
keyExtractor={item => item}
renderItem={({item}) => (
  <PlayerCard name={item} onRemove={() => {}} />
)}

ListEmptyComponent={() => <ListEmpty message="Não há jogadores nesse time"/>}
showsVerticalScrollIndicator={false}
contentContainerStyle={[
  {paddingBottom:100}, players.length === 0 && {flex:1}
  
  ]}
/>
<Button 
title="Remover Turma"
type="SECONDARY"
/>

    </Container>
  );
}
