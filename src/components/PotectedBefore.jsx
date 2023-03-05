import { Navigate } from "react-router-dom";

const ProtectedBefore = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/Connexion" replace />;
  }
  return children;
};
export default ProtectedBefore;
