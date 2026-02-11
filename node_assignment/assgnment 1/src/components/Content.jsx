import React from 'react'
import './Content.css'

const Content = () => {
  return (
    <div className="content">
      <h1>FS Model for Node</h1><br />
      <label htmlFor="">Enter : </label>
      <input type="text" name="Text-box" placeholder="Enter text here"/>
      <br /><br />
      <div className="buttons">
        <button>Write</button>
        <button>Read</button>
      </div>
      <div className="reades_content">
        
      </div>
    </div>
  )
}

export default Content
