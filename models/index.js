const {
  Contact,
  contactAddSchema,
  updateFavoriteStatusSchema,
} = require('./contact');

const { User, joiSignupSchema } = require('./user');

module.exports = {
  Contact,
  contactAddSchema,
  updateFavoriteStatusSchema,
  User,
  joiSignupSchema,
};
