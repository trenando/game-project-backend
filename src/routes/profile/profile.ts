import { User } from "../../model/User";
import { Profile } from "./userTypes";
import { userIdDecoder } from "../../token/verifyToken";
import { IUser } from "../../model/modelTypes";
import { PROFILE_ERROR } from "../../response-constants/profile";

export const profile: Profile = async (req, res) => {

    const userProfile: IUser | null = await User.findOne({ _id: userIdDecoder(req.headers.token) });
    if (!userProfile) return res.status(401).send(PROFILE_ERROR);

    try {
        return res.json({
            login: userProfile.login,
            name: userProfile.name,
            postCount: userProfile.postCount,
            subCount: userProfile.subCount
        });
    } catch (err) {
        return res.status(400).send(`Неудачный запрос: ${err}`);
    };
};