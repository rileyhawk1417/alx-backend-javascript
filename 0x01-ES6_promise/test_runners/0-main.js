import getResponseFromApi from '../0-promise.js'

const response = getResponseFromApi()

console.log(response instanceof Promise)
