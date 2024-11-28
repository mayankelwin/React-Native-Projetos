import React, { useState } from 'react';
import { Container, Btn, Title, Icon, } from './styles';


type Props = {
  titleganhos: string;
  titledata: string;
  titlemoney: string;
};

export function TabBar() {
  const [selectedIcon, setSelectedIcon] = useState<string>('home'); 

  const handleIconClick = (iconName: string) => {
    setSelectedIcon(iconName); 
  };

  return (
   
      <Container>
      <Btn onPress={() => handleIconClick('newspaper')}>
        <Icon
          name="newspaper-outline"
          selected={selectedIcon === 'newspaper'}
          size={30}
        />
        <Title>Relatórios</Title>
      </Btn>

      <Btn onPress={() => handleIconClick('home')}>
        <Icon
          name="home"
          selected={selectedIcon === 'home'} 
          size={30}
        />
        <Title>Visão geral</Title>
      </Btn>

      <Btn onPress={() => handleIconClick('person')}>
        <Icon
          name="person-outline"
          selected={selectedIcon === 'person'} 
          size={30}
        />
        <Title>Relatórios</Title>
      </Btn>
    </Container>
    
  );
}