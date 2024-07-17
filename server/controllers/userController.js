const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Basket} = require('../models/models');

const generateJwt = (user_id, email, role, name, surname, middle_name, country, city) => {
    return jwt.sign({user_id, email, role, name, surname, middle_name, country, city}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, name, surname, middle_name, country, city} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Неправильний email або password'))
        }
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest('Користувач із таким email вже існує'))
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, password: hashPassword, name, surname, middle_name, country, city});
        const basket = await Basket.create({userUserId: user.id});
        const token = generateJwt(user.id, user.email, user.role, user.name, user.surname, user.middle_name, user.country, user.city) ;
        return res.json({token});
    }

    async login(req, res, next) {
        const {email, role, password} = req.body;
        const user = await User.findOne({where: {email}});
        if(!user) {
            return next(ApiError.iternal('Користувача із таким email не знайдено'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword) {
            return next(ApiError.iternal('Невірний пароль'));
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({token});
    }
}

module.exports = new UserController()