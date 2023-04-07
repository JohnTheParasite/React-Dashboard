import { memo } from 'react';
import { TextField } from '@mui/material';

import { Field, useFormikContext } from 'formik';

const UserTextField = ({
  field,
  label,
  placeholder = '',
  disabled = false,
}) => {
  const { values, touched, errors, handleChange, handleBlur } =
    useFormikContext();

  return (
    <Field
      searchable="true"
      id={field}
      name={field}
      label={label}
      onChange={handleChange}
      value={values[field]}
      width="fluid"
      placeholder={placeholder}
      component={TextField}
      variant="filled"
      type="text"
      helperText={touched[field] && errors[field]}
      error={!!touched[field] && !!errors[field]}
      onBlur={handleBlur}
      disabled={disabled}
      fullWidth
    />
  );
};

export default memo(UserTextField);
