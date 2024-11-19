import {View, Image, Text} from "react-native"
import { styles } from "./styles"
import clipboard from '../../assets/clipboard.png'

export function Empty () {
return <View style={styles.emptyContainer}>
    <Image source={clipboard} style={styles.img}/>
    <Text style={styles.textBold}>Sem tarefas cadastradas</Text>
    <Text style={[styles.textBold, styles.textRegular]}>Crie tarafas e organize seus a fazeres </Text>
</View>
}