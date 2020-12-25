import bcrypt from 'bcrypt';
import { loginValidation } from "../../validation/authValidation/authValidation";
import { User } from "../../model/User";
import { Token } from "../../model/Token";
import { generateToken, expireMin, generateRefreshToken } from "../../token/generateToken";
import { Login, RegisterValidationError } from "./authTypes";
import { IToken, IUser } from '../../model/modelTypes';

export const login: Login = async (req, res) => {
    //validate
    const { error }: RegisterValidationError = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user: IUser | null = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email or password is wrong");

    //password is correct
    const validPass: boolean = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Email or password is wrong");

    const token: string = generateToken({ _id: user._id });
    const refreshToken: string = generateRefreshToken({ _id: user._id });
    const authToken: IToken = new Token({
        _id: user._id,
        token,
        refreshToken,
        expireAt: expireMin(10),
        createdAt: Date()
    });
    try {
        const saveToken: IToken = await authToken.save();
        return res.json({ accessToken: saveToken.token, refreshToken: saveToken.refreshToken }).send();
    } catch (err) {
        return res.status(400).send(err);
    };
};