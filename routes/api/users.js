const express = require('express');
const { ctrlWrapper, validation } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');
const { joiSignupSchema } = require('../../models');

const router = express.Router();

router.post('/signup', validation(joiSignupSchema), ctrlWrapper(ctrl.signup));

router.post('/login', validation(joiSignupSchema), ctrlWrapper(ctrl.login));

module.exports = router;
