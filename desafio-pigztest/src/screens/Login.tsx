import { VStack, Image, Center, Text, Heading } from '@gluestack-ui/themed'
import { Input } from '@components/Input'

import Logo from '@assets/logo.svg' 

export function Login(){
return(
    <VStack flex={1} bg='$White'>
        
        <VStack flex={1} px={'$10'} pb={'$16'}>
        <Center mt={'$40'}>
<Logo  />
<Text color='$Gray600' fontSize={'$xs'}>
    Para entregadores
</Text>
            
        </Center>

<Center gap={"$2"}>
    <Heading color='$Gray600' fontSize={'$xg'} >Login</Heading>
    <Input placeholder='E-mail' />
    <Input placeholder='E-mail' />
</Center>

</VStack>
    </VStack>
)
}