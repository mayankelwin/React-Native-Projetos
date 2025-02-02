import {View,} from "react-native"
import { Container, LoadIndicator } from "./styles"

export function Loading () {
return (
 <Container>
     <LoadIndicator size={58} color={'#ff0404'} />


 </Container>
);
}