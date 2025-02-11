import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the stored role from local storage when the app loads
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  const login = (newRole) => {
    localStorage.setItem("role", newRole);
    setRole(newRole);

    // Redirect based on role
    if (newRole === "admin") {
      navigate("/admin");
    } else if (newRole === "user") {
      navigate("/user");
    }
  };

  const logout = () => {
    localStorage.removeItem("role");
    setRole(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ role, setRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
