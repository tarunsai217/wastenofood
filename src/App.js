import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Components/Header/Header';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/'></Route>
        <Route path='/about'></Route>
        <Route path='/food-donors'></Route>
        <Route path='/charities'></Route>
        <Route path='/volunteer'></Route>
        <Route path='/admin'></Route>
        <Route path='/contact'></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
