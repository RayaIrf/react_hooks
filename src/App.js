import './App.css';
import React from 'react';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseCountainer from './components/MouseCountainer';

function App() {
  return (
    <div className="App">
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {<MouseCountainer />} 
    </div>
  );
}

export default App;
