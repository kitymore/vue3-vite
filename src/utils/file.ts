import JSZip from 'jszip'
import FileSaver from 'file-saver'
/**
 单个图片文件下载
**/
export function downloadImg(imgsrc: string, name: string) {
    const images = new Image()
    images.setAttribute('crossOrigin', 'anonymous')
    images.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = images.width
      canvas.height = images.height
      const context: any = canvas.getContext('2d')
      context.drawImage(images, 0, 0, images.width, images.height)
      const url = canvas.toDataURL('image/png') // 得到图片的base64编码数据
      const a = document.createElement('a') // 生成一个a元素
      const event = new MouseEvent('click') // 创建一个单击事件
      a.download = name || 'photo' // 设置图片名称
      a.href = url // 将生成的URL设置为a.href属性
      a.dispatchEvent(event) // 触发a的单击事件
    }
    images.src = imgsrc
  }
  /**
  多张图片以压缩包的形式下载
  imgsList： 存放多张图片路径的数组 base64
  **/
  export function multDownloadImgZip(imgsList: any) {
    const blogTitle = '打印二维码下载'
    const zip = new JSZip()
    const imgs: any = zip.folder(blogTitle)
    const baseList: any = []
    //   const imgNameList: any = []
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < imgsList.length; i++) {
      const images = new Image()
      images.setAttribute('crossOrigin', 'anonymous')
      images.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = images.width
        canvas.height = images.height
        const context: any = canvas.getContext('2d')
        context.drawImage(images, 0, 0, images.width, images.height)
        const url = canvas.toDataURL('image/png') // 得到图片的base64编码数据
        baseList.push(url.substring(22)) // 去掉base64编码前的 data:image/png;base64,
        if (baseList.length === imgsList.length && baseList.length > 0) {
          // eslint-disable-next-line no-plusplus
          for (let k = 0; k < baseList.length; k++) {
            imgs.file(`${k}.png`, baseList[k], { base64: true })
          }
          zip.generateAsync({ type: 'blob' }).then((content) => {
            // see FileSaver.js
            FileSaver.saveAs(content, `${blogTitle}.zip`)
          })
        }
      }
      images.src = imgsList[i].base64 // base64的图片url路径
    }
  }
  
  