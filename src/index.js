import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './app/store/configureStore';
import ScrollToTop from './app/common/util/ScrollToTop';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
const store = configureStore();

const rootElt = document.getElementById('root');




let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop >
      </BrowserRouter>
    </Provider>



    , rootElt)
  // ReactDOM.render(<h1>dd</h1>, rootElt)
}
if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render)
  })
}
render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
