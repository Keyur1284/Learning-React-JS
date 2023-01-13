import { ChangeProfile } from "./ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";


export const Profile = () => {

    const {userName} = useContext(AppContext);

    return (
    <div className="m-3">
        This is the profile page of user {userName} 
        <ChangeProfile />
    </div>
    );
};