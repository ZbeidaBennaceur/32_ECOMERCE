import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Register from "./pages/Register";

import Profile from "./pages/Profile";
import Error from "./pages/Error";
import Login from "./pages/Login";
import NavBarre from "./components/NavBarre";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { current } from "./JS/actions/auth.Action";
import { useEffect } from "react";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./routes/AdminRoute";
import { ToastContainer } from 'react-toastify';
import ErrorToast from './components/ErrorToast';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./components/Loading";
import DetailProd from "./pages/DetailProd";



function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.authReducer.isAuth);
const user=useSelector(state=>state.authReducer.user)
const errors=useSelector(state=>state.authReducer.errors)
const isLoad=useSelector(state=>state.authReducer.isLoad)
console.log(errors)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  return (
    <div className="App">
     {isLoad && <Loading/>}

<ErrorToast errors={errors} />
     <ToastContainer
  
/>
      <NavBarre />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/prod/:id' element={<DetailProd/>}/>

        {user && user.isAdmin &&
      ( <Route path='/admin' element={<AdminRoute isAdmin={user.isAdmin}/>}>
      <Route path='/admin' element={<AdminDashboard/>}/> </Route>)}

        
        {isAuth? (<Route 
          path='/profile' 
          element={<Profile/>} 
        />) : (
          <>
         <Route 
          path='/register'
          element={<Register/>}/>  
           <Route 
          path='/login'
          element={<Login/>}/>
             </>) 
        }
        
        {/* Route catch-all */}
       
      
        <Route path='/*' element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;
