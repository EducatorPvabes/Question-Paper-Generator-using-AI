import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import hero from "../../assets/hero.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        sx={{
          minHeight: "100vh",
          alignItems: "center",
        }}
      >
        {/* Left Side */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={8}>
            <CardContent sx={{ p: 5 }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                AI Question Paper Generator
              </Typography>

              <Typography color="text.secondary" mb={4}>
                Sign in to continue
              </Typography>

              <TextField
                label="Email Address"
                fullWidth
                margin="normal"
              />

              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setShowPassword(!showPassword)
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

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={2}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label="Remember Me"
                />

                <Link href="/forgot-password" underline="hover">
                  Forgot Password?
                </Link>
              </Box>

              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{ mt: 3 }}
              >
                Login
              </Button>

              <Typography align="center" mt={3}>
                Don't have an account?{" "}
                <Link href="/register">
                  Register
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Side */}
        <Grid
          size={{ xs: 12, md: 6 }}
          display="flex"
          justifyContent="center"
        >
          <Box
            component="img"
            src={hero}
            alt="Hero"
            sx={{
              width: "90%",
              maxHeight: 500,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;