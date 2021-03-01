import Comics from './comics'
import ComicsApi from './api'
import './style.css'

const app = document.getElementById('app')
const num = parseInt(document.location.pathname.slice(1)) || 0

ComicsApi.getComics(num).then((comics) => {
  new Comics(app, comics).init()
})
