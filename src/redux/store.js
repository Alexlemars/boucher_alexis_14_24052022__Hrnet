import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

//devTool
import { composeWithDevTools } from 'redux-devtools-extension';


// const middleware = [thunk];
const middleware = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;