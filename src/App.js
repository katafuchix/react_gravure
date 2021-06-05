import Sidebar from './modules/sidebar';
import { BrowserRouter as Router,
          Switch,
          Route,
          Link
        } from 'react-router-dom';

import Home from './Home'
import Sample from './sample';

import SplitPane from 'react-split-pane';

/*
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
           <Route path="/profile">
             <Home />
           </Route>
           <Route path="/login">
             <Home />
           </Route>
         </Switch>
      </div>
    </Router>
  );
}
*/
const styles = {
  background: '#000',
  width: '2px',
  cursor: 'col-resize',
  margin: '0 5px',
  height: '100%',
};


function App() {
  return (
  <Router>
    <SplitPane
      split="vertical"
      minSize={100}
      defaultSize={100}
      resizerStyle={styles}
    >
      <menu>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/topics">Topics</Link></div>
      </menu>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Home} />
      </div>
    </SplitPane>
  </Router>
);
}
/*
function App() {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150
  };
  return (
    <div className="App">
      <div style={style}>
        <Sample />
      </div>
    </div>
  );
}
*/
export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
*/
