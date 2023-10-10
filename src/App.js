import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Header/NavBar/NavBar';
import ItemListContainer from './components/Header/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Header/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotFound from './components/Header/NotFound/NotFound';

const App= () => {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Climate Works!" caption="No solo estamos navegando por las últimas tendencias en tecnología y diseño, sino que también estamos comprometidos con la lucha contra el cambio climático."/>}/>
          <Route path="/category/:categoryId"  element={<ItemListContainer greeting="¡Bienvenido a Climate Works!" caption="No solo estamos navegando por las últimas tendencias en tecnología y diseño, sino que también estamos comprometidos con la lucha contra el cambio climático."/>}/>
          <Route path="/item/:itemId"  element={<ItemDetailContainer/>}/>
          <Route  path="*"  element={<NotFound/>} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
