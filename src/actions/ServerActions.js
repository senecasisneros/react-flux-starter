import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveName(names) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_NAMES',
      names
    })
  },
  receiveOneName(id) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_NAME',
      id
    })
  },
  createName(name) {
    AppDispatcher.dispatch({
      type: "CREATE_NAME",
      name
    })
  },
  deleteName(id) {
    AppDispatcher.dispatch({
      type: 'DELETE_NAME',
      id
    })
  },
  getOneScraper(obj) {
    AppDispatcher.dispatch({
      type: "GET_ONE_SCRAPER",
      obj
    })
  },
  getScrapers(obj) {
    AppDispatcher.dispatch({
      type: "GET_SCRAPERS",
      obj
    })
  }
}

export default ServerActions
