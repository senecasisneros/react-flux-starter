import axios from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getAllNames() {
    axios.get('/api/names')
    .then(res => res.data)
    .then(ServerActions.receiveNames)
    .catch(console.error);
  },
  getOneName(id) {
    axios.get('/api/names/:id')
    .then(res => res.data)
    .then(ServerActions.getOneName)
    .catch(console.error)
  },
  createName(name) {
    axios.post('/api/names', name)
    .then(res => res.data)
    .then(ServerActions.receiveOneName)
    .catch(console.error);
  },
  deleteName(id) {
    axios.delete('/api/names/:id')
    .then(res => res.data)
    .then(ServerActions.deleteName)
    .catch(console.error);
  },
  getOneScraper(obj) {
    axios.post('/api/scraper', obj)
    .then(res => res.data)
    .then(ServerActions.getOneScraper)
    .catch(console.error)
  },
  getScrapers(obj) {
    axios.post('/api/scraper/links', obj)
    .then(res => res.data)
    .then(ServerActions.getScrapers)
    .catch(console.error)
  }
}

export default API;
