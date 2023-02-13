import Phil from './IMG_2627.JPEG';
import './App.css';
import Message from './Message.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" id="phil" src={Phil} />
        <Message />
      </header>
    </div>
  );
}

export default App;
