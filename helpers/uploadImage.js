const {v4: uuidv4} = require('uuid')
const path = require('path')
const sharp = require('sharp')
const uploadImage = async (imageBuffer) => {
  const sharpImage = sharp(imageBuffer)
  const imageMetadata = await sharpImage.metadata()
  if (imageMetadata.width > 1000) {
    sharpImage.resize(1000)
  }
  const imageName = `${uuidv4()}.${imageMetadata.format}`
  const imagePath = path.join(__dirname, '..', 'uploads', imageName)
  await sharpImage.toFile(imagePath)
  return imageName
}
module.exports = uploadImage
