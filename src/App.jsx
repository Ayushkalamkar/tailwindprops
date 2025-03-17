import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <h1 className='text-black'>Ayush kalamkar-Frontend developer</h1>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-3 rounded-3xl'>
            <button
              onClick={() => setColor("red")}
              className='outline-none px-4 py-1 rounded-full text to-blue-950 shadow-2xl'
              style={{ backgroundColor: "red" }}
            >Red</button>
            <button
              onClick={() => setColor("pink")}
              className='outline-none px-4 py-1 rounded-full text to-blue-950 shadow-2xl'
              style={{ backgroundColor: "pink" }}
            >Pink</button>
            <button
              onClick={() => setColor("yellow")}
              className='outline-none px-4 py-1 rounded-full text to-blue-950 shadow-2xl'
              style={{ backgroundColor: "yellow" }}
            >Yellow</button>
            <button
              onClick={() => setColor("grey")}
              className='outline-none px-4 py-1 rounded-full text to-blue-950 shadow-2xl'
              style={{ backgroundColor: "grey" }}
            >Grey</button>
            <button
              onClick={() => setColor("purple")}
              className='outline-none px-4 py-1 rounded-full text-black shadow-2xl'
              style={{ backgroundColor: "purple" }}
            >Purple</button>
            <button
              onClick={() => setColor("orange")}
              className='outline-none px-4 py-1 rounded-full text to-blue-950 shadow-2xl'
              style={{ backgroundColor: "orange" }}
            >Orange</button>
            <button
              onClick={() => setColor("Green")}
              className='outline-none px-4 py-1 rounded-full text to-blue-950 shadow-2xl'
              style={{ backgroundColor: "Green" }}
            >Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App