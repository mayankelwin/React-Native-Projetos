import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <FontAwesome6 name="users" size={32} color="#00875F" />
      <Title>{title}</Title>
    </Container>
  );
}
