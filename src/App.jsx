import reactLogo from './assets/react.svg'
import reduxLogo from './assets/redux logo.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel='noreferrer'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank" rel='noreferrer'>
          <img src={reduxLogo} className="logo" alt="Redux Logo" />
        </a>
      </div>
      <h1>React Redux Fetching Data</h1>
      <div className="card">
      </div>
    </>
  )
}

export default App
