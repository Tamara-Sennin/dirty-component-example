import React, { useState } from 'react'
import DirtiestComponent from './DirtiestComponent'
import GoodComponent from './GoodComponent/GoodComponent'
import NotSoDirtyComponent from './NotSoDirtyComponent'

function App() {
  const [iterator, setIterator] = useState<number>(0)

  const switchIterator = () => {
    setIterator((prevNumber) => (prevNumber + 1) % 3)
  }

  return (
      <section>
          <h2><u>Separation of concerns</u></h2>
        <button onClick={switchIterator} style={{marginBottom:20}}>Switch Component</button>
        <br/>
        {iterator === 0 && <DirtiestComponent />}
        {iterator === 1 && <NotSoDirtyComponent />}
        {iterator === 2 && <GoodComponent />}
      </section>
  )
}

export default App
