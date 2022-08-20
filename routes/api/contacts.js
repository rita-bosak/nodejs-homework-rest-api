const express = require('express');
const { contactAddSchema } = require('../../models');
const { ctrlWrapper, validation } = require('../../middlewares');
const { contacts: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.listContacts));

router.get('/:contactId', ctrlWrapper(ctrl.getContactById));

router.post('/', validation(contactAddSchema), ctrlWrapper(ctrl.addContact));

router.delete('/:contactId', ctrlWrapper(ctrl.removeContact));

router.put(
  '/:contactId',
  validation(contactAddSchema),
  ctrlWrapper(ctrl.updateContact)
);

module.exports = router;
