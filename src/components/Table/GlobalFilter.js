import React, { useState, useTransition } from 'react';
import { Grid, Input, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { CircularProgress } from '@material-ui/core';

import { globalSearchStyles } from './tableStyles';

function GlobalFilter({ onGlobalFilterChange }) {
  const [inputValue, setInputValue] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleInputChange = e => {
    setInputValue(e.target.value);
    startTransition(() => {
      onGlobalFilterChange(e.target.value);
    });
  };

  const handleInputClean = () => {
    setInputValue('');
  };

  const classes = globalSearchStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Input
          autoComplete="off"
          classes={{ root: classes.root }}
          startAdornment={<SearchIcon />}
          endAdornment={
            <div className={isPending ? 'show' : 'hide'}>
              <CircularProgress size={20} />
            </div>
          }
          placeholder="Search"
          label="Filter"
          onChange={handleInputChange}
          value={inputValue}
        />
      </Grid>
    </Grid>
  );
}

export default GlobalFilter;
