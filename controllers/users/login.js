const { User } = require('../../models');
const bcryptjs = require('bcryptjs');

const { createError } = require('../../helpers');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const comparePassword = bcryptjs.compareSync(
    password,
    bcryptjs.genSaltSync(10)
  );

  if (!user || !comparePassword) {
    throw createError(401, 'Email or password is wrong');
  }

  const result = await User.create({ email, password: hashPassword });
  const { subscription } = result;
  res.status(201).json({
    status: 'success',
    code: 201,
    user: { email, subscription },
  });
};

module.exports = login;
