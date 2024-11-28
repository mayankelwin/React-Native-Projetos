import { Btn, TItle } from "./styles";
type Props ={
    title: string;
}
export function Button({title}: Props) {
    return(
       <Btn>
        <TItle>
         {title}
        </TItle>
       </Btn>
    )
}