import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import "../../config";
import { User } from "../../model/User";
import { registerValidation } from "../../validation/authValidation/authValidation";

export const register = async (req: Request, res: Response) => {
    //validate
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //cheking email if exist
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("Email already exists");

    //hash pass
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //add to database
    const user = new User({
        login: req.body.login,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        await user.save();
        return res.status(200).send("The user was created");
    } catch (err) {
        return res.status(400).send(err);
    };
};
