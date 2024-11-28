import { Input as GleustackInput,InputField  } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof InputField>
export function Input({...rest}: Props){
    <GleustackInput>
        <InputField {...rest} />
    </GleustackInput>
}