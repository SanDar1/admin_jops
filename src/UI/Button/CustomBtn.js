import React from 'react';

import Button from '@mui/material/Button';

function CustomBtn({
    variant,
    customColor,
    customBorderColor,
    margin,
    onBtnClick,
    text,
    endIcon,
    startIcon
  })
{
  const customStyle = {
    color: customColor,
    borderColor: customBorderColor,
    margin: margin
  }

  return (
    <Button
      variant={variant}
      sx={customStyle}
      onClick={onBtnClick}
      endIcon={endIcon}
      startIcon={startIcon}
    >
      {text}
    </Button>
  );
}

export default CustomBtn;