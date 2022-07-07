const fs = require('fs').promises
const path = require('path')
const sharp = require('sharp')
const {v4: uuidv4} = require('uuid')

const imageUploadPath = path.join(__dirname, '..', process.env.UPLOADS_DIR)

const processAndSaveImage = async (imageBuffer) => {
  // 1. Creamos el directorio si no existe
  await fs.mkdir(imageUploadPath, {recursive: true})

  // 2. Procesamos la imagen subida
  const image = sharp(imageBuffer)

  // 3. Obtenemos metadatos de la imagen
  const imageMetadata = await image.metadata()

  // 4. Si tiene más de 1000px, la resizeamos a dicho tamaño
  if (imageMetadata.width > 1000) {
    image.resize(1000)
  }

  // 5. Generamos un identificador para el nombre de la imagen
  const imageFileName = `${uuidv4()}.${imageMetadata.format}`

  // 6. Guardamos la imagen en el path de uploads y en nombre generado
  await image.toFile(path.join(imageUploadPath, imageFileName))

  // 7. Devolvemos el nombre generado
  return imageFileName
}

module.exports = processAndSaveImage
