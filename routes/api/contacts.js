const express = require('express');
const {
  contactAddSchema,
  updateFavoriteStatusSchema,
} = require('../../models');
const { auth, ctrlWrapper, validation } = require('../../middlewares');
const { contacts: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/', auth, ctrlWrapper(ctrl.listContacts));

router.get('/:contactId', auth, ctrlWrapper(ctrl.getContactById));

router.post(
  '/',
  auth,
  validation(contactAddSchema),
  ctrlWrapper(ctrl.addContact)
);

router.delete('/:contactId', auth, ctrlWrapper(ctrl.removeContact));

router.put(
  '/:contactId',
  auth,
  validation(contactAddSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  '/:contactId/favorite',
  auth,
  validation(updateFavoriteStatusSchema),
  ctrlWrapper(ctrl.updateFavoriteStatus)
);

module.exports = router;
