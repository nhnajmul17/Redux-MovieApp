import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
