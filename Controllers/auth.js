import User from '../Model/User.js'
import bcrypt from 'bcryptjs';

export const register = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser =  new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        isAdmin: req.body.isAdmin,
    });

    try 
    {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch(error)
    {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try
    {
        const user = await User.findOne({username: req.body.username});
        if(!user) return res.status(404).json("User not found !!!");

        const isPasswordCorrec = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrec) return res.status(400).json("Wrong password !!!");

        const {password, isAdmin} = user._doc;
        res.status(200).json("Welcome.... Login is Succesfull !!! ")
    }
    catch(error)
    {
        next(error);
    }
}