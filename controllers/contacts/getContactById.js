const { Contact } = require('../../models');
const { createError } = require('../../helpers');

async function getContactById(req, res) {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw createError(404);
  }
  res.json({ status: 'success', code: 200, data: { result } });
}

module.exports = getContactById;
