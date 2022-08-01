import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import Admin from './Pages/Admin/Admin';
import CategoryMovies from './Pages/CategoryMovie/CategoryMovies';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Home/Header';
import Home from './Pages/Home/Home';
import TopBar from './Pages/Home/TopBar';
import EmailVerify from './Pages/Login/EmailVerify';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import ResetPassword from './Pages/Login/ResetPassword';
import SignUp from './Pages/Login/SignUp';
import InfoMovie from './Pages/Movies/InfoMovie';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className='max-w-7xl mx-auto bg-black'>
      <TopBar></TopBar>
      <Header></Header>
      <Routes>
        <Route path="/" element={<> <Home></Home></>}></Route>
        <Route path='*' element={<><NotFound></NotFound> <Footer></Footer></>}></Route>
        <Route path='/movie/:name' element={<><RequireAuth><InfoMovie></InfoMovie> <Footer></Footer></RequireAuth></>}></Route>
        <Route path='/category/:category' element={<><CategoryMovies></CategoryMovies> <Footer></Footer></>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='/forget' element={<><ResetPassword /><Footer></Footer></>}></Route>
        <Route path='/verify' element={<EmailVerify />}></Route>
        <Route path='login' element={<><Login></Login> <Footer></Footer></>}></Route>
        <Route path='/signup' element={<><SignUp></SignUp><Footer></Footer></>} ></Route>
      </Routes >
      <ToastContainer />
    </div >
  );
}

export default App;
