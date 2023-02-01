import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const state = useSelector(s => s);
  const router = useRouter();
  const isAuthenticated = false;
  if (!isAuthenticated) {
    router.push('/login')
    return null
  }

  return <>{children}</>
}

export default PrivateRoute;