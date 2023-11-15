import React, { useState } from 'react';
import { analyzeImage } from './azure-image-analysis';

function App() {
  const [imgUrl, setImgUrl] = useState('')
  const [result, setResult] = useState(null)

  const handleImgUrlChange = (e) => {
    setImgUrl(e.target.value)
  }

  const handleAnalyzeImage = async () => {
    const result = await analyzeImage(imgUrl)
    setResult(result)
    console.log(result)
  }

  return (
    <>
      <div id='main-container'>
        <h1>AI App</h1>
        <input onChange={handleImgUrlChange} type="text" placeholder='Enter an URL or Promt'/>
        <div id='buttons-container'>
        <button onClick={handleAnalyzeImage}>Image Analysis</button>
        <button>Image Generation</button>
        </div>
      </div>
      {result ? (<pre>{JSON.stringify(result, null, 2)}</pre>) : (<p>Loading...</p>)}
    </>

  )
}

export default App;
