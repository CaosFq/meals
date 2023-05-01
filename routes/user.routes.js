const { Router } = require('express');
const { check } = require('express-validator');
const { signup, login } = require('../controllers/user.controller');
const {
  signupValidations,
  validateFields,
  loginValidation,
} = require('../middlewares/validations.middleware');
const { validPassword, validUserByEmail } = require('../middlewares/user.middleware');

const router = Router();

router.post('/signup', signupValidations, validateFields, signup);

router.post(
  '/login',
  loginValidation,
  validateFields,
  validUserByEmail,
  validPassword,
  login
);

module.exports = {
  userRouter: router,
};
