import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/Header/ItemListContainer';

const App= () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting="¡Bienvenido a Climate Works!" caption="No solo estamos navegando por las últimas tendencias en tecnología y diseño, sino que también estamos comprometidos con la lucha contra el cambio climático."/>
    </div>
  );
}

export default App;
