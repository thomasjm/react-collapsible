import React from 'react'
import ReactDOM from 'react-dom'
import Collapsible from '../../src/Collapsible'

const App = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Collapsible className=""
                   transitionTime={300}
                   open={open}
                   trigger={"Is open: " + JSON.stringify(open)}
                   handleTriggerClick={() => {
                     console.log("Doing setOpen", !open);
                     setOpen(!open);
                   }}>
      </Collapsible>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
