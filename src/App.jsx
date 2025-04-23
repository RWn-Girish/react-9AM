import './App.css'
import ControlComp from './components/ControlComp'
import Counter from './components/Counter'
import ListComp from './components/ListComp'
import UnControlComp from './components/UnControlComp'

function App() {

  return (
    <>
      {/* <Counter name="Virat Kohli" team="RCB" /> */}
      {/* <ListComp /> */}
      <ControlComp />
      <UnControlComp />
    </>
  )
}

export default App
