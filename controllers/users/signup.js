const bcryptjs = require('bcryptjs');
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');

const { User } = require('../../models');
const { createError } = require('../../helpers');
const { sendEmail } = require('../../helpers');

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw createError(409, 'Email in use');
  }

  const verificationToken = nanoid();

  const avatarURL = gravatar.url(email);

  const hashPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));

  const result = await User.create({
    email,
    password: hashPassword,
    avatarURL,
  });

  const mail = {
    to: email,
    subject: 'Email verification',
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Verify your email</a>`,
  };

  await sendEmail(mail);

  const { subscription } = result;
  res.status(201).json({
    status: 'success',
    code: 201,
    user: { verificationToken, email, subscription, avatarURL },
  });
};

module.exports = signup;
