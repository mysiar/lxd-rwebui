import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

import { COLOR_PRIMARY_2 } from '../constants/Colors';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const ProgressBar = () => (
  <div style={style.container}>
    <RefreshIndicator
      size={50}
      left={0}
      top={0}
      status="loading"
      loadingColor={COLOR_PRIMARY_2}
      style={style.refresh}
    />
  </div>
);

export default ProgressBar;
