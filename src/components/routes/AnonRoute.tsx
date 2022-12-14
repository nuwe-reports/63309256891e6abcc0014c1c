import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

function AnonRoute({ children }: Props) {
  const userLogged = localStorage.getItem("username");
  if (userLogged) return <Navigate to="/characters" replace />;
  return children;
}

export default AnonRoute;
