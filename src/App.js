import './App.css'
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
{/*         <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a> */}
        <span className='buttonSection'>
        <ButtonComponent 
        className = "styleBtn"
        textButton='Bottone 1' 
        />
        <ButtonComponent 
        className = "styleBtn"
        textButton='Bottone 2' 
        />
        <ButtonComponent 
        className = "styleBtn"
        textButton='Bottone 3' 
        />
        </span>
        <div id='container'>
        <ImageComponent 
        src = "https://picsum.photos/200"
        className = "styleImg"
        alt = "img1"
        />
        <ImageComponent 
        src = "https://picsum.photos/300"
        className = "styleImg"
        alt = "img2"
        />
        <ImageComponent 
        src = "https://picsum.photos/400"
        className = "styleImg"
        alt = "img3"
        />
        </div>

      </header>
    </div>
  )
}

export default App
