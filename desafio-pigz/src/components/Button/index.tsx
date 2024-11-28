import { Btn, TItle } from "./styles";

export function Button() {
    return(
       <Btn onPress={()=>getLogin}>
        <TItle>
         Entrar
        </TItle>
       </Btn>
    )
}