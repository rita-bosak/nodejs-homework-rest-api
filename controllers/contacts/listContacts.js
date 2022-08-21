const { Contact } = require('../../models');

async function listContacts(req, res) {
  const list = await Contact.find({});
  res.json({ status: 'success', code: 200, data: { list } });
}

module.exports = listContacts;
