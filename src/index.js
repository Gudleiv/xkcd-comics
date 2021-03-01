import Comics from './comics'
import ComicsApi from './api'

const app = document.getElementById('app')
ComicsApi.getComics(1).then((comics) => {
  console.log(comics)
  
  new Comics(app, comics)
})

