const { Contact } = require('../../models');

async function listContacts(req, res) {
  const { _id } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;

  const list = await Contact.find({ owner: _id }, '', {
    skip,
    limit: Number(limit),
  }).populate('owner', '_id email subscription');
  res.json({ status: 'success', code: 200, data: { list } });
}

module.exports = listContacts;
