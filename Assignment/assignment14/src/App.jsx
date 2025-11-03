import React from 'react'
import { Card } from './components/Card'
import Navbar from './components/navbar'

import './app.css'
const App = () => {
  return (
    <>
      <Navbar />
      <div id="modify">
        <Card name={"12$"} />
        <Card name={"5$"} />
        <Card name={"8%"} />
      </div>
    </>
  )
}

export default App