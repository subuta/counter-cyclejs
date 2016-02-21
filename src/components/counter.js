import { element } from 'decca'

// Define a state-less component
const Counter = {
  render: ({ props }) => {
    return (<div>
      <button onClick={props.onClick}>Increment</button>
      <h4>{props.value}</h4>
    </div>)
  }
}

// Render the app tree
export default Counter
