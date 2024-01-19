import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ButtonToggle from './ButtonToggle';
import Counter from './Counter';
import List from './List';
import Practice from './Practice';
import TicTacToe from './TicTacToe';
// import InformationTable from './InformationTable';
import PhonebookForm from './PhonebookForm';
function App() {
  return (
    <Router>
      <div>
        <h3>TOPICS</h3>
        <ol>
          <li>
            <Link to='/'>Toggle Button</Link>
          </li>
          <li>
            <Link to='counter'>React Simple Counter</Link>
          </li>
          <li>
            <Link to='list'>List Rendering</Link>
          </li>
          <li>
            <Link to='exersice'>Playground</Link>
          </li>
          <li>
            <Link to='phonebook'>PhoneBook</Link>
          </li>
          <li>
            <Link to='game'>Tic Tac Toe</Link>
          </li>
          {/* <li>
            <Link path='information'>PhoneBook Info</Link>
          </li> */}
        </ol>
        <Routes>
          <Route path='/' element={<ButtonToggle />} />
          <Route path='counter' element={<Counter/>}></Route>
          <Route path='list' element={<List/>}></Route>
          <Route path='exersice' element={<Practice/>}></Route>
          <Route path='phonebook' element={<PhonebookForm/>}></Route>
          <Route path='game' element={<TicTacToe/>}></Route>
          {/* <Route path="information" element={<InformationTable/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
