import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
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
  const { isLoggedIn } = useContext(AuthContext) as loginState;

  if (!isLoggedIn) return <Navigate to="/" replace />;

  return children;
}

export default PrivateRoute;
