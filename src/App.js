import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import CategoryMovies from './Pages/CategoryMovie/CategoryMovies';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Home/Header';
import Home from './Pages/Home/Home';
import TopBar from './Pages/Home/TopBar';
import InfoMovie from './Pages/Movies/InfoMovie';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className='max-w-7xl mx-auto bg-black'>
      <TopBar></TopBar>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='*' element={<><NotFound></NotFound> <Footer></Footer></>}></Route>
        <Route path='/:name' element={<><InfoMovie></InfoMovie> <Footer></Footer></>}></Route>
        <Route path='/category/:category' element={<><CategoryMovies></CategoryMovies> <Footer></Footer></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
