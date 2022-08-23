const { User } = require('../../models');
const bcryptjs = require('bcryptjs');

const { createError } = require('../../helpers');

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw createError(409, 'Email in use');
  }

  const hashPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
  const result = await User.create({ email, password: hashPassword });
  const { subscription } = result;
  res.status(201).json({
    status: 'success',
    code: 201,
    user: { email, subscription },
  });
};

module.exports = signup;
