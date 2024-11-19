import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
headerContainer:{
    backgroundColor: theme.colors.base.gray700,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 173,
    position: 'relative',

},
form: {
    position: 'absolute',
    bottom: -54 / 2,
    width: "100%",
    height: 54,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: theme.colors.base.gray500,
    height: 54,
    width:'75%',
    borderRadius: 5,
    color: theme.colors.base.gray100,
    padding: 16,
    fontSize: theme.font_size.md,
    marginRight: 12,
    borderColor: theme.colors.base.gray700,
    borderWidth: 2,
  },
  inputBorder:{
    borderColor: theme.colors.brand.purple,
  },
  btn: {
    width: 54,
    height: 54,
    borderRadius: 5,
    backgroundColor: theme.colors.brand.blue_dark,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: '#fff',
    fontSize:24,
  },
})