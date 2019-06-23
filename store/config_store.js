import { createStore, combineReducers, compose } from 'redux';
import carReducer from './reducers/cars_reducer';

const rootReducer = combineReducers({
    cars: carReducer,
});

let composeEnhancers = compose;

if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configStore = () => {
    return createStore(rootReducer, composeEnhancers());
};

export default configStore;