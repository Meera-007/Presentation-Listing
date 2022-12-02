import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Main from './components/main';
import Login from './components/main/Login';
import SignUp from './components/main/SignUp';
import Admin from './components/admin';
import User from './components/user';
import AdminProfile from './components/admin/Profile';
import UserProfile from './components/user/Profile';
import UploadSlide from './components/admin/UploadSlide';
import ManageSlide from './components/admin/ManageSlides';
import UpdateSlide from './components/admin/UpdateSlide';
import ManageUser from './components/admin/ManageUser';
import UpdateUser from './components/admin/UpdateUser';
import BrowseSlides from './components/main/BrowseSlides';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route element={<Main />} path="main">
          
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="browse" element={<BrowseSlides />} />
          </Route>
          
          <Route element={<Admin />} path="admin">
            <Route path="profile" element={<AdminProfile />} />
            <Route path="uploadslide" element={<UploadSlide />} />
            <Route path="manageslides" element={<ManageSlide />} />
            <Route path="updateslide" element={<UpdateSlide />} />
            <Route path="createuser" element={<SignUp />} />
            <Route path="manageuser" element={<ManageUser />} />


          
          </Route>
          
          <Route element={<User />} path="user">
            <Route path="profile" element={<UserProfile />} />
          
          </Route>

          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
