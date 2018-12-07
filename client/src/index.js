import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "mobx-react"
import { configure } from "mobx"
import { Router } from "react-router-dom"
import { createBrowserHistory } from "history"
import { syncHistoryWithStore } from "mobx-react-router"
import * as stores from "./store/index"
import App from "./App"

// For easier debugging
window._APPSTATE_ = stores
configure({ enforceActions: "always" })

const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, stores.routerStore)

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)
