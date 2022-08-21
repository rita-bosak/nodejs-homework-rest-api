const { Contact } = require('../../models');

async function updateFavoriteStatus(req, res) {
  const { contactId } = req.params;
  const { favorite } = req.body;

  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    {
      new: true,
    }
  );

  if (!result) {
    throw createError(404);
  }

  res.json({
    status: 'success',
    code: 200,
    data: { result },
  });
}

module.exports = updateFavoriteStatus;
