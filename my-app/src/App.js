import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <input type="text" className="form-control mb-2" placeholder="First Input" />
        <input type="text" className="form-control mb-2" placeholder="Second Input" />
        <input type="button" className="btn btn-primary" value="Submit" />
      </div>

      <div className="container text-center">
        <div className="row mb-3">
          <div>1 of 2</div>
          <div >2 of 2</div>
        </div>
        <div className="row">
          <div>1 of 3</div>
          <div>2 of 3</div>
          <div>3 of 3</div>
        </div>
      </div>
    </div>
  )
}

export default App