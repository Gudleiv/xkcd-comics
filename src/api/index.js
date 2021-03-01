const getComics = async (num = 1) => {
  const url = `http://127.0.0.1:8081/xkcd.com/${num}/info.0.json`
  const response = await fetch(url, {
    
  })
  const data = await response.json()
  return data
  
}

export default {
  getComics
}