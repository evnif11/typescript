import CounterContainer from 'containers/CounterContainer';
import React from 'react';
import './App.css';
import Profile from './components/Profile';
import TodoList from './components/TodoList';

class App extends React.Component {
  render() {
    
    return (
      <div>
        <Profile name="leechanjoo" job="developer"/>
        <CounterContainer />  
        <TodoList />
      </div>
      
    );
  }
}

export default App;
