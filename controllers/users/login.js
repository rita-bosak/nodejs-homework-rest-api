const bcryptjs = require('bcryptjs');
const { User } = require('../../models');

const { createError } = require('../../helpers');

const { SECRET_KEY } = process.env;

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

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: { token },
  });
};

module.exports = login;
