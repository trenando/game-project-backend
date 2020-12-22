import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import "../../config";
import { loginValidation } from "../../validation/authValidation/authValidation";
import { User } from "../../model/User";
import { Token } from "../../model/Token";
import { generateToken, expireMin, generateRefreshToken } from "../../token/generateToken";

export const login = async (req: Request, res: Response) => {
    //validate
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //cheking email if exist
    const user: any = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email or password is wrong");

    //password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Email or password is wrong");

    //create and assign a token
    const token: string = generateToken({ _id: user._id });
    const refreshToken: string = generateRefreshToken({ _id: user._id });
    const authToken = new Token({
        _id: user._id,
        token,
        refreshToken,
        expireAt: expireMin(10),
        createdAt: Date()
    });
    try {
        const saveToken: any = await authToken.save();
        return res.json({ accessToken: saveToken.token, refreshToken: saveToken.refreshToken }).send();
    } catch (err) {
        return res.status(400).send(err);
    };
};