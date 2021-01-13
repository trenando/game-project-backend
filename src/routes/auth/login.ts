import bcrypt from 'bcrypt';
import { loginValidation } from "../../validation/authValidation/authValidation";
import { User } from "../../model/User";
import { Token } from "../../model/Token";
import { generateToken, setCustomMin, generateRefreshToken } from "../../token/generateToken";
import { Login, RegisterValidationError } from "./authTypes";
import { IToken, IUser } from '../../model/modelTypes';
import { WRONG_USER } from '../../response-constants/auth';

export const login: Login = async (req, res) => {
    //validate
    const { error }: RegisterValidationError = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user: IUser | null = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send(WRONG_USER);

    //password is correct
    const validPass: boolean = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send(WRONG_USER);

    const token: string = generateToken({ _id: user._id });
    const refreshToken: string = generateRefreshToken({ _id: user._id });
    const authToken: IToken = new Token({
        _id: user._id,
        token,
        refreshToken,
        expireAt: setCustomMin(10),
        createdAt: setCustomMin(0)
    });
    try {
        const saveToken: IToken = await authToken.save();
        return res.json({ accessToken: saveToken.token, refreshToken: saveToken.refreshToken });
    } catch (err) {
        return res.status(400).send(err);
    };
};