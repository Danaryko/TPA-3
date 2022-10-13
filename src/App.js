import './App.css';
import NavigationBar from "./component/NavigationBar"
import './style/landingPage.css'
import Intro from './component/Intro'
import Trending from './component/Trending';
import SerialTV from './component/SerialTV';

function App() {
  return (
    <div>
      {/*intro section*/}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/*end of intro*/}
      <div className="trending">
        <Trending />
      </div>
      <div className='serialtv'>
        <SerialTV />
      </div>
    </div>
  )
}

export default App;
