const express = require('express');
const { auth, ctrlWrapper, validation } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');
const { joiSignupSchema } = require('../../models');

const router = express.Router();

router.post('/signup', validation(joiSignupSchema), ctrlWrapper(ctrl.signup));

router.post('/login', validation(joiSignupSchema), ctrlWrapper(ctrl.login));

router.post('/current', auth, ctrlWrapper(ctrl.getCurrent));

router.get('/logout', auth, ctrlWrapper(ctrl.logout));

module.exports = router;
