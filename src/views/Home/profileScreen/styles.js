import {StyleSheet} from 'react-native';
import {scale} from '../../../hooks/scale';
import {colors} from '../../../themes/colors';

export default StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  viewSpace: {
    height: scale(50),
  },
  viewIconLeft: {
    width: scale(40),
    height: scale(40),
    borderWidth: 1,
    borderColor: colors.border_color,
    borderRadius: scale(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBody: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  styleAvatar: {
    marginTop: scale(50),
    marginBottom: scale(20),
  },
  rootRedirect: {
    width: '90%',
    paddingHorizontal: scale(24),
    paddingVertical: scale(24),
    marginVertical: scale(16),
    borderRadius: scale(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border_color,
    borderStyle: 'solid',
  },
  textRedirect: {
    fontSize: scale(24),
    lineHeight: scale(32),
    fontWeight: '700',
    color: colors.title,
  },
  btnLogout: {
    marginVertical: scale(5),
  },
  textLogout: {
    fontWeight: '600',
    fontSize: scale(14),
    lineHeight: scale(16),
    color: colors.title,
  },
});
