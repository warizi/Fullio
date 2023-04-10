import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './Components/App';
import Main from './Components/MainPage/Main';
import './Components/main.css';
import MyPage from './Components/MyPage/MyPage';
import RecordMain from './Components/RecordPage/RecordMain';
import ManagementMain from './Components/ManagementPage/ManagementMain';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/main' element={<Main />} />
      <Route path='/main/mypage' element={<MyPage />} />
      <Route path='/main/Record' element={<RecordMain />} />
      <Route path='/management' element={<ManagementMain />} />
    </Routes>
  </BrowserRouter>
);