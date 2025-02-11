import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./pages/route"; // ✅ Ensure correct import
import { AuthProvider } from "./context/AuthContext"; // ✅ Import AuthProvider
import "./assets/css/style.css";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <RoutesComponent /> {/* ✅ Ensure the component name is correct */}
      </AuthProvider>
    </Router>
  );
};

export default App; // ✅ Ensure default export
