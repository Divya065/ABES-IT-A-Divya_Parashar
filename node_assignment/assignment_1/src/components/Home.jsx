import React, { useState } from 'react'
import axios from "axios"

function Home() {
  const [content, setContent] = useState('')
  const [fileData, setFileData] = useState('')

  
  const writeContent = async () => {
    try {
      await axios.post('http://localhost:5000/write', {
        content
      })
      alert("File written successfully")
      setContent('')
    } catch (error) {
      console.log(error)
    }
  }

  
  const readContent = async () => {
    try {
      const response = await axios.get('http://localhost:5000/read')
      setFileData(response.data.content)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6">
        
        <h1 className="text-2xl font-bold text-center text-gray-800">
          FS Model for Node
        </h1>

        <input
          type="text"
          placeholder="Enter text..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-4">
          <button
            onClick={writeContent}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            FS create/write
          </button>

          <button
            onClick={readContent}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            FS read
          </button>
        </div>

        <div className="border-t pt-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            File Content
          </h2>
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 min-h-[100px] whitespace-pre-wrap">
            {fileData || "No file content yet"}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home