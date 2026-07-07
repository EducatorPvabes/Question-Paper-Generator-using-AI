import { Routes, Route, Navigate } from "react-router-dom";
import QuestionBank from "./pages/questionBank/QuestionBank";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import GeneratePaper from "./pages/questionPaper/GeneratePaper";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import PaperBuilder from "./pages/paperBuilder/PaperBuilder";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/users/Users";
import Profile from "./pages/profile/Profile";
import PaperPreview from "./pages/paperPreview/PaperPreview";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public Routes */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />

      <Route
  path="/paper-preview"
  element={
    <ProtectedRoute>
      <PaperPreview />
    </ProtectedRoute>
  }
/>


      <Route
        path="/forgot-password"
        element={
          <PublicRoute>
            <ForgetPassword />
          </PublicRoute>
        }
      />

      <Route
        path="/reset-password"
        element={
          <PublicRoute>
            <ResetPassword />
          </PublicRoute>
        }
      />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
  path="/generate-paper"
  element={
    <ProtectedRoute>
      <GeneratePaper />
    </ProtectedRoute>
  }
/>

      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route
  path="/question-bank"
  element={
    <ProtectedRoute>
      <QuestionBank />
    </ProtectedRoute>
  }
/>

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
