import API from '../API'

const NameActions = {
  getAllNames: API.getAllNames,

  getOneNames(id) {
    API.getOneNames(id);
  },
  createName(name) {
    API.createName(name);
  },
  deleteName(id) {
    API.deleteName(id);
  },
  getOneScraper(obj) {
    API.getOneScraper(obj);
  },
  getScrapers(obj) {
    API.getScrapers(obj);
  }
}

export default NameActions
