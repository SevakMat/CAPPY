import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PublicButton } from "../../public/Button"
import { AppDispatch, RootState, useAppSelector } from "../../store"
import { logOutEffect } from "../../store/effects/auth.effects";
import Addresses from "../googleMap/Addresses";
import GoogleMap from "../googleMap/GoogleMap";

const Dashboard = () => {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate();
    const { user } = useAppSelector((state: RootState) => { return state.auth })


    const logout = () => {
        dispatch(logOutEffect(navigate))
    }



    return (
        <div
            style={{
                border: "2px solid rgb(104, 104, 104)",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "25px"
            }}
        >
            <GoogleMap user={user} />
            <Addresses user={user} />
        </div>
    )
}

export default Dashboard