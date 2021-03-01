import comics404 from './../assets/img/404.jpg'

const proxy = 'http://127.0.0.1:8081/'

const getComics = async (num) => {
  let url = `https://xkcd.com/${num}/info.0.json`

  if (typeof(num) !== 'number' || num === 0) {
    url = 'https://xkcd.com/info.0.json'
  }
  const response = await fetch(proxy + url)
  if (response.status === 404) return {
    num: 404,
    img: comics404,
    title: '404 - Comics not found'
  }
  
  const data = await response.json()
  const latest = await getAmountOfComics()
  data.num === latest ? data.latest = true : data.latest = false
  return data
}

const getAmountOfComics = async () => {
  const storeName = 'amountOfComics'
  const num = getCookie(storeName)
  if (num) return parseInt(num)
  else {
    const url = proxy + 'https://xkcd.com/info.0.json'
    const response = await fetch(url)
    const data = await response.json()
    document.cookie = `${storeName}=${data.num};max-age=600`
    return parseInt(data.num)
  }
}

export default {
  getComics,
  getAmountOfComics
}

function getCookie(name) {
  const matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
