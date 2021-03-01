import Comics from './comics'
import ComicsApi from './api'

const app = document.getElementById('app')
const num = parseInt(document.location.pathname.slice(1)) || 0

ComicsApi.getComics(num).then((comics) => {
  console.log(comics)
  
  new Comics(app, comics).init()
})
