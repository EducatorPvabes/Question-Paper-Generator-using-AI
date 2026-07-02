import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  Box,
  Button,
  Link,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import { toast } from "react-toastify";

import PasswordField from "./PasswordField";

import {
  nameValidation,
  emailValidation,
  passwordValidation,
  confirmPasswordValidation,
} from "../../utils/validation";

import {
  departments,
  designations,
  roles,
} from "../../utils/constants";

import { registerUser } from "../../services/authService";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      department: "",
      designation: "",
      role: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await registerUser(data);

      toast.success(response.message);

      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Registration Failed");
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
        maxWidth: 450,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Create Account
      </Typography>

      <Typography
        color="text.secondary"
        mb={3}
      >
        Register to continue
      </Typography>

      {/* Full Name */}

      <TextField
        fullWidth
        margin="normal"
        label="Full Name"
        {...register("name", nameValidation)}
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      {/* Email */}

      <TextField
        fullWidth
        margin="normal"
        label="Email Address"
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

      {/* Confirm Password */}

      <PasswordField
        label="Confirm Password"
        name="confirmPassword"
        register={register}
        errors={errors}
        validation={confirmPasswordValidation(getValues)}
    />
          {/* Temporary End */}
          {/* Department */}

<TextField
  select
  fullWidth
  margin="normal"
  label="Department"
  defaultValue=""
  {...register("department", {
    required: "Department is required",
  })}
  error={!!errors.department}
  helperText={errors.department?.message}
>
  {departments.map((department) => (
    <MenuItem
      key={department}
      value={department}
    >
      {department}
    </MenuItem>
  ))}
</TextField>
{/* Designation */}

<TextField
  select
  fullWidth
  margin="normal"
  label="Designation"
  defaultValue=""
  {...register("designation", {
    required: "Designation is required",
  })}
  error={!!errors.designation}
  helperText={errors.designation?.message}
>
  {designations.map((designation) => (
    <MenuItem
      key={designation}
      value={designation}
    >
      {designation}
    </MenuItem>
  ))}
</TextField>
{/* Role */}

<TextField
  select
  fullWidth
  margin="normal"
  label="Role"
  defaultValue=""
  {...register("role", {
    required: "Role is required",
  })}
  error={!!errors.role}
  helperText={errors.role?.message}
>
  {roles.map((role) => (
    <MenuItem
      key={role}
      value={role}
    >
      {role}
    </MenuItem>
  ))}
</TextField>
<Button
  type="submit"
  fullWidth
  variant="contained"
  size="large"
  disabled={loading}
  sx={{
    mt: 3,
    py: 1.5,
    borderRadius: 2,
    textTransform: "none",
    fontSize: 16,
    fontWeight: 600,
  }}
>
  {loading ? "Creating Account..." : "Register"}
</Button>
<Typography
  align="center"
  sx={{ mt: 3 }}
>
  Already have an account?{" "}
  <Link
    component={RouterLink}
    to="/login"
    underline="hover"
    fontWeight="bold"
  >
    Login
  </Link>
</Typography>
    </Box>
  );
};

export default RegisterForm;