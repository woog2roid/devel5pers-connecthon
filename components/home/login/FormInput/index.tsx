import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

interface FormInputProps {
  label: string;
  name: string;
  type: 'text' | 'password' | 'email';
}

const FormInput = ({ type, name, label }: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const clickShowPassword = () => setShowPassword((state) => !state);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  return (
    <FormControl sx={{ width: '100%' }} variant="outlined">
      <InputLabel htmlFor={name} sx={{ fontFamily: 'Noto Sans KR' }}>
        {label}
      </InputLabel>
      <OutlinedInput
        id={name}
        type={type !== 'password' ? type : showPassword ? 'text' : 'password'}
        name={name}
        label={label}
        endAdornment={
          type == 'password' ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={clickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </IconButton>
            </InputAdornment>
          ) : null
        }
      />
    </FormControl>
  );
};

export default FormInput;
