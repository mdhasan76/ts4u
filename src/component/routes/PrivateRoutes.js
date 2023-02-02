import Login from "@/pages/login";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const {isLoggedUser} = useSelector(s => s);

  if (!isLoggedUser) {
    return <Login/>
  }

  return <>{children}</>
}

export default PrivateRoute;