import { spacing, getMuiTheme } from 'material-ui/styles';

import {
  COLOR_PRIMARY_1, COLOR_PRIMARY_2, COLOR_PRIMARY_3,
  COLOR_ACCENT_1, COLOR_ACCENT_2, COLOR_ACCENT_3,
  COLOR_TEXT, COLOR_TEXT_ALTERNATE, COLOR_CANVAS, COLOR_BORDER, COLOR_DISABLED,
} from '../constants/Colors';

const rawBaseTheme = {
  ...spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: COLOR_PRIMARY_1,
    primary2Color: COLOR_PRIMARY_2,
    primary3Color: COLOR_PRIMARY_3,
    accent1Color: COLOR_ACCENT_1,
    accent2Color: COLOR_ACCENT_2,
    accent3Color: COLOR_ACCENT_3,
    textColor: COLOR_TEXT,
    alternateTextColor: COLOR_TEXT_ALTERNATE,
    canvasColor: COLOR_CANVAS,
    borderColor: COLOR_BORDER,
    disabledColor: COLOR_DISABLED,
  },
  spacing: {
    iconSize: 16,
  },
};

export default getMuiTheme(rawBaseTheme);
