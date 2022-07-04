import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './landing/Landing.jsx';
import CounterApp from './counter/CounterApp.jsx';
import IndecisionApp from './indecision/IndecisionApp';


function App() {
  return (
    <div className="App">
     <BrowserRouter >
          <Landing/>
          {/* <Route exact={true} path="/" component={Landing} /> */}
          <Route path="/counter-app" component={CounterApp} />
          <Route path="/indecision-app" component={IndecisionApp} />

     </BrowserRouter>
    </div>
  );
}

export default App;
