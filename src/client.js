import { dom, element } from 'decca'
import debounce from 'lodash-amd/debounce'

import configureStore from 'store'
import App from 'containers/App'

// Create a Redux store to handle all UI actions and side-effects
let store = configureStore()
// Create an app that can turn vnodes into real DOM elements
var render = dom.createRenderer(document.body, store.dispatch)
var update = () => { render(<App/>, store.getState()) }
store.subscribe(debounce(update, 0))

// render initial state.
update()
