import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import { toast } from "react-toastify";

import useAuth from "../../hooks/useAuth";
import PasswordField from "./PasswordField";
import { loginUser } from "../../services/authService";

import {
  emailValidation,
  passwordValidation,
} from "../../utils/validation";

const LoginForm = () => {
  const navigate = useNavigate();

  // AuthContext
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await loginUser(data);

      // Context handles LocalStorage + State
      login(response.token, response.user);

      toast.success("Login Successful 🎉");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: "100%",
        maxWidth: 420,
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Welcome Back
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Sign in to continue
      </Typography>

      {/* Email */}
      <TextField
        fullWidth
        margin="normal"
        label="Email Address"
        autoComplete="email"
        {...register("email", emailValidation)}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      {/* Password */}
      <PasswordField
        label="Password"
        name="password"
        register={register}
        errors={errors}
        validation={passwordValidation}
      />

      {/* Remember Me */}
      <FormControlLabel
        control={<Checkbox />}
        label="Remember Me"
        sx={{ mt: 1 }}
      />

      {/* Forgot Password */}
      <Box
        display="flex"
        justifyContent="flex-end"
        mb={3}
      >
        <Link
          component={RouterLink}
          to="/forgot-password"
          underline="hover"
        >
          Forgot Password?
        </Link>
      </Box>

      {/* Login Button */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        disabled={loading}
        sx={{
          py: 1.5,
          borderRadius: 2,
          textTransform: "none",
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        {loading ? "Signing In..." : "Login"}
      </Button>

      {/* Register */}
      <Typography
        align="center"
        sx={{ mt: 3 }}
      >
        Don't have an account?{" "}
        <Link
          component={RouterLink}
          to="/register"
          underline="hover"
          fontWeight="bold"
        >
          Register
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;