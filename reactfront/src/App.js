import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import {BrowserRouter as Router,Route} from "react-router-dom";

//Importar componentes
import ShowProducts   from './components/ShowProducts';
import CreateProducts from './components/CreateProducts';
import EditProduct    from  './components/EditProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowProducts/>} />
          <Route path='/create' element={<CreateProducts/>} />
          <Route path='/edit/:id' element={<EditProduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
