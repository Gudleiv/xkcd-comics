import comics404 from './../assets/img/404.jpg'

const getComics = async (num) => {
  const proxy = 'http://127.0.0.1:8081/' // proxy cors
  let url = `https://xkcd.com/${num}/info.0.json`
  if (typeof(num) !== 'number' || num === 0) url = 'https://xkcd.com/info.0.json'

  const response = await fetch(proxy + url)
  if (response.status === 404) return {
    num: 404,
    img: comics404,
    titile: '404 - Comics not found'
  }
  const data = await response.json()
  return data
}

export default {
  getComics
}
