import { createStore, applyMiddleware } from "redux";
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

export const configureStore = () => {
    const middleWares = [thunk]
    const composedEnhancer = composeWithDevTools(applyMiddleware(...middleWares))
    const store = createStore(rootReducer, composedEnhancer)

    return store;
}