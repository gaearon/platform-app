import React from 'react';
import { useState } from 'react';
import { Slider, Typography, withStyles } from '@material-ui/core';

import { decimalPlaces } from '../../constants';

const styles = () => ({
  root: {
    width: 300,
  },
  container: {
    padding: '10px 0',
  },
});

const ClassicAssociationsSlider = ({
  classes,
  defaultValue,
  onChange,
  onChangeCommitted,
}) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className={classes.root}>
      <Typography id="label">
        Minimum Score: {value.toFixed(decimalPlaces)}
      </Typography>
      <Slider
        classes={{
          root: classes.container,
        }}
        defaultValue={value}
        value={value}
        step={0.01}
        min={0}
        max={1}
        onChange={(e, nextValue) => {
          setValue(nextValue);
          onChange(e, nextValue);
        }}
        onChangeCommitted={onChangeCommitted}
      />
    </div>
  );
};

export default withStyles(styles)(ClassicAssociationsSlider);
