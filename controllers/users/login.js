const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const { createError } = require('../../helpers');

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const comparePassword = bcryptjs.compareSync(password, user.password);

  if (!user || !user.verify || !comparePassword) {
    throw createError(401, 'Email or password is wrong');
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  await User.findByIdAndUpdate(user._id, { token });

  const { subscription } = user;

  res.status(200).json({
    token: token,
    code: 200,
    user: { email, subscription },
  });
};

module.exports = login;
