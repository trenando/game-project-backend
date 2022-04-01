import { User } from "../../model/User";
import { Profile } from "./userTypes";
import { UserSchema } from "../../model/modelTypes";
import { PROFILE_ERROR } from "../../response-constants/profile";
import { userIdDecoder } from "../../userIdDecoder";

export const profile: Profile = async (req, res) => {

    const userProfile: UserSchema | null = await User.findOne({ _id: userIdDecoder(req.headers.token) });
    if (!userProfile) return res.status(401).send(PROFILE_ERROR);

    try {
        return res.status(200).json({ ...userProfile });
    } catch (err) {
        return res.status(400).send(`Неудачный запрос: ${err}`);
    };
};