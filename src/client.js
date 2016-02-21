import { Observable } from 'rx'

import Cycle from '@cycle/core'
import { div, button, h4, makeDOMDriver } from '@cycle/dom'

const view = count$ => {
  return count$.map(count =>
    div([
      button('.increment', 'Increment'),
      h4(String(count))
    ])
  )
}

function main (sources) {
  const increment$ = sources.DOM.select('.increment').events('click').map(ev => 1)

  const action$ = Observable.merge(increment$)
  const count$ = action$.startWith(0).scan((x, y) => x + y)

  return {
    DOM: view(count$)
  }
}

Cycle.run(main, {
  DOM: makeDOMDriver(document.body)
})
