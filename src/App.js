import logo from './logo.svg';
import './App.css';
import Heart from './Heart';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Image from './Image';
import Head from './head';

function App() {
  return (
  <BrowserRouter>
  <Head></Head>
  
    <Routes>
    <Route path="/love" element={<Heart></Heart>}></Route>
      <Route path="/love/myheart" element={<Image></Image>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
