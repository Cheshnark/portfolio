import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Main from '../Pages/Main/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element= {<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
