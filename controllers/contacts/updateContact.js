const { Contact } = require('../../models');
const { createError } = require('../../helpers');

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw createError(404);
  }
  res.json({ status: 'success', code: 200, data: { result } });
};

module.exports = updateContact;
