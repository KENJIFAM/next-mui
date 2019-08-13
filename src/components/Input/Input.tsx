import React from 'react';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MuiInput from '@material-ui/core/Input';
import useStyles from './useStyles';

interface OwnProps {
  labelText: React.ReactNode;
  labelProps?: object;
  id: string;
  inputProps?: object;
  formControlProps: {
    className?: string,
    fullWidth?: boolean
  };
  inputRootCustomClasses?: string;
  error?: boolean;
  success?: boolean;
  white?: boolean;
}

type Props = OwnProps;

const Input: React.FC<Props> = props => {
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success
  } = props;
  const classes = useStyles();
  const labelClasses = clsx({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = clsx({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white
  });
  const marginTop = clsx({
    [inputRootCustomClasses!]: inputRootCustomClasses !== undefined
  });
  const inputClasses = clsx({
    [classes.input]: true,
    [classes.whiteInput]: white
  });
  let formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = clsx(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + ' ' + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <MuiInput
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses
        }}
        id={id}
        {...inputProps}
      />
    </FormControl>
  );
};

export default Input;
