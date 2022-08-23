const fs = require('fs/promises');
const path = require('path');

const { User } = require('../../models');

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars');

const setAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;
  const imageName = `${id}_${originalname}`;

  try {
    const resultUpload = path.join(avatarsDir, imageName);
    await fs.rename(tempUpload, resultUpload);

    const avatarURL = path.join('public', 'avatars', originalname);

    await User.findByIdAndUpdate(id, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = setAvatar;
