import { User } from "../../model/User";
import { Profile } from "./userTypes";
import { userIdDecoder } from "../../token/verifyToken";
import { IUser } from "../../model/modelTypes";

export const profile: Profile = async (req, res) => {

    const userProfile: IUser | null = await User.findOne({ _id: userIdDecoder(req.headers.token) });
    if (!userProfile) return res.status(401).send("You are not authorized");

    try {
        res.json({
            login: userProfile.login,
            name: userProfile.name,
            postCount: userProfile.postCount,
            subCount: userProfile.subCount
        }).send();
    } catch (err) {
        res.status(400).send(`Bad request: ${err}`);
    }
};