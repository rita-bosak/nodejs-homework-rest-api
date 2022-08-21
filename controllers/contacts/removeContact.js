const { Contact } = require('../../models');
const { createError } = require('../../helpers');

async function removeContact(req, res) {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw createError(404);
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'contact deleted',
    data: { result },
  });
}

module.exports = removeContact;
