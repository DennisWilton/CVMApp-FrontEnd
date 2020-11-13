import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import sagas, {mySaga} from './sagas';

const store = createStore(reducers, applyMiddleware(sagas))

sagas.run(mySaga)

export default store;