import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

function PrivateRoute({ children }: Props) {
  const userLogged = localStorage.getItem("username");
  if (!userLogged) return <Navigate to="/" replace />;
  return children;
}

export default PrivateRoute;
