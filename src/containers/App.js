import { element } from 'decca'

import * as CounterActions from 'actions/counter'
import Counter from 'components/counter'

// Dispatch an action when the button is clicked
let increment = dispatch => event => {
  dispatch(CounterActions.incrementCounter())
}

const App = {
  render ({ context, dispatch }) {
    return <Counter value={context.counter.counter}
      onClick={increment(dispatch)}/>
  }
}

export default App
