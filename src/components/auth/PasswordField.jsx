import { useState } from "react";
import {
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const PasswordField = ({
  label = "Password",
  register,
  name,
  errors,
  validation = {},
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      fullWidth
      margin="normal"
      label={label}
      type={showPassword ? "text" : "password"}
      {...register(name, validation)}
      error={!!errors[name]}
      helperText={errors[name]?.message}
      autoComplete="current-password"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleTogglePassword}
              edge="end"
              aria-label={
                showPassword ? "Hide Password" : "Show Password"
              }
            >
              {showPassword ? (
                <VisibilityOff />
              ) : (
                <Visibility />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;