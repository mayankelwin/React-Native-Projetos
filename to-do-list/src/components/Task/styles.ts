import { StyleSheet } from "react-native";
import { theme } from "../../theme";
export const styles = StyleSheet.create({
  taskContainer: {
    width: "100%",
    height: 64,
    backgroundColor: theme.colors.base.gray500,
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius:8,
    borderWidth:1,
    borderColor: theme.colors.base.gray400
  },

  textContainer:{
width:'80%',
height:40,
justifyContent:'center',
alignContent: 'center',
marginHorizontal: 8,
  },
  textConcluida:{
fontSize: theme.font_size.md,
color: theme.colors.base.gray300,
textDecorationLine:'line-through'
  },
  textCriado:{
    fontSize: theme.font_size.md,
    color: theme.colors.base.gray100,
    textDecorationLine:'none'
  }
});
