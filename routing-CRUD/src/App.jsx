import './App.css'
import { Route, Routes } from 'react-router'
import AddBook from './Components/AddBook'
import Header from './Components/Header'
import HomePage from './Components/HomePage'
import EditBook from './Components/EditBook'

function App() {

  return (
    <>
    <Header />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/add-book' element={<AddBook />} />
          <Route path='/edit-book/:id' element={<EditBook />} />
      </Routes>
    </>
  )
}

export default App
