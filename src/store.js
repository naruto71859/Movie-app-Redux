import GofList from "./Reducer";
import { createStore} from 'redux';

const store = createStore(GofList,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
