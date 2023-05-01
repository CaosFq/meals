const { validationResult, check } = require('express-validator');

exports.validateFields = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};
exports.signupValidations = [
  check('name', 'the name is required')
    .not()
    .isEmpty()
    .withMessage('Name cannot be empty'),
  check('email', 'the email is required')
    .not()
    .isEmpty()
    .withMessage('Email cannot be empty'),
  check('email', 'the email must have a correct format')
    .isEmail()
    .withMessage('Must be a valid email'),
  check('password', 'the password is required')
    .not()
    .isEmpty()
    .withMessage('Password cannot be empty'),
];

exports.loginValidation = [
  check('email', 'the email is required')
    .not()
    .isEmpty()
    .withMessage('Email cannot be empty'),
  check('email', 'the email must have a correct format')
    .isEmail()
    .withMessage('Must be a valid email'),
  check('password', 'the password is required')
    .not()
    .isEmpty()
    .withMessage('Password cannot be empty'),
];
