const {check} = require('express-validator')

module.exports = [
    check('email')
    .exists().withMessage('Vui lòng cung cấp địa chỉ email')
    .notEmpty().withMessage('Địa chỉ email không được để trống')
    .isEmail().withMessage('Email không hợp lệ'),

    check('password')
    .exists().withMessage('Vui lòng cung cấp password')
    .notEmpty().withMessage('password không được để trống')
    .isLength({min:6}).withMessage('Password ít nhất 6 kí tự'),

    check('fullname')
    .exists().withMessage('Vui lòng cung cấp tên người dùng')
    .notEmpty().withMessage('Tên người dùng không được để trống')
    .isLength({min:6}).withMessage('Tên người dùng ít nhất 6 kí tự'),
]