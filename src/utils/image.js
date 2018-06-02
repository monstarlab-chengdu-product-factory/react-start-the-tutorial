/**
 * file loader
 *
 * @param {File} file
 * @return {Promise} promise
 */
export const fileReader = (file) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      resolve(reader.result)
    }
  })
}

/**
 * load image async
 *
 * @param {String} url
 * @return {Promise} promise
 */
export const loadImageAsync = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = url
    image.setAttribute("crossOrigin",'Anonymous')

    if (image.complete) {
      resolve(image)
    } else {
      image.onload = () => {
        resolve(image)
      }
    }
    image.onError = () => {
      reject(new Error('Could not load image at ' + url))
    }
  })
}

/**
 * image to base64
 *
 * @param {String} url
 * @return {String} base64
 */
export const image2Base64 = (url) => {
  loadImageAsync(url).then(image => {
    const imgCanvas = document.createElement('canvas')
    const context = imgCanvas.getContext('2d')

    imgCanvas.width = image.width
    imgCanvas.height = image.height

    context.drawImage(image, 0, 0, image.width, image.height)
    return imgCanvas.toDataURL('image/jpg')
  })
}