import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutAction } from "../../../store/reducers/auth/actions";

interface IProps {
    value: "Log in" | "Log out";
    navigationAdress?: string;
}

const LogInLogOutButton = (props: IProps) => {
    const { value, navigationAdress = "" } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const goToAdress = () => {
        navigate(`${navigationAdress}`);
    };
    const logOutAndGoHome = async () => {
        dispatch(signOutAction())
        navigate("/");
    };
    
    return (
        <input
            type="button"
            value={value}
            onClick={value === "Log out" ? logOutAndGoHome : goToAdress}
        />
    );
};

export default LogInLogOutButton;