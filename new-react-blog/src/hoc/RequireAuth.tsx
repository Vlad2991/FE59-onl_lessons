import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { AppState } from "../store/store";

interface IProps {
    children: JSX.Element;
}
const userSelector = (state: AppState) => state.auth.user
const RequireAuth = (props: IProps) => {
    const location = useLocation();
    const user = useSelector(userSelector)

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} />;
    }
    return props.children;
};

export default RequireAuth;