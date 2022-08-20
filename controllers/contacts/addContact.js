const { createError } = require('../../helpers');
const { Contact } = require('../../models');

async function addContact(req, res) {
  const result = await Contact.create(req.body);
  res.json({ status: 'success', code: 201, data: { result } });
}

module.exports = addContact;
