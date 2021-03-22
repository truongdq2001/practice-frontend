import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import {colors} from '../../themes/colors';
export const icons = {
  iconFb: (size = 25, color = colors.text) => {
    return <IconAwesome name="facebook" size={size} color={color} />;
  },
  iconInstagram: (size = 25, color = colors.text) => (
    <IconAwesome name="instagram" size={size} color={color} />
  ),
  iconGoogle: (size = 25, color = colors.text) => (
    <IconAwesome name="google" size={size} color={color} />
  ),
  iconEye: (size = 25, color = colors.text) => (
    <IconFeather name="eye" size={size} color={color} />
  ),
  iconEyeOff: (size = 25, color = colors.text) => (
    <IconFeather name="eye-off" size={size} color={color} />
  ),
};
