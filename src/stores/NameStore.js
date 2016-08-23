import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import uuid from 'uuid';

let _name = [];

class NameStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_NAMES':
        _name = action.name;
        this.emit('CHANGE');
        break;

        case 'RECEIVE_ONE_NAME':
        var { name } = action;
        _name.push(name);
        this.emit('CHANGE');
        break;


        case 'CREATE_NAME':
        var { name } = action;

        name._id = uuid();
        name.createdAt = Date.now();

        _name.push(name);
        this.emit('CHANGE');
        break;

        case 'DELETE_NAME':
        var { name } = action;
        this._names = this._names.filter(i => i._id !== name._id);
        this.emit("CHANGE");
        break;
        
        case 'GET_ONE_SCRAPER':
        _nameLyric =  action.obj;
        this.emit("CHANGE");
        break;

        case 'GET_SCRAPERS':
        _links =  action.obj;
        this.emit("CHANGE");
        break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return _name;
  }
}

export default new NameStore();
