import './App.css';
import React from 'react';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      <HookCounterThree />
    </div>
  );
}

export default App;
