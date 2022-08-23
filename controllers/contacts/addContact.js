const { createError } = require('../../helpers');
const { Contact } = require('../../models');

async function addContact(req, res) {
  const { _id } = req.user;
  const result = await Contact.create({ ...req.body, owner: _id });
  res.json({ status: 'success', code: 201, data: { result } });
}

module.exports = addContact;
