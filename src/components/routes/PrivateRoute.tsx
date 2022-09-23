import { useContext } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

interface loginState {
  isLoggedIn: boolean;
  logInUser: (username: string) => void;
  logOutUser: (username: string) => void;
}

function PrivateRoute({ children }: Props) {
  const userLogged = localStorage.getItem("username");
  if (!userLogged) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PrivateRoute;
