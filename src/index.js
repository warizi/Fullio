import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './Components/App';
import Main from './Components/MainPage/Main';
import './Components/main.css';
import MyPage from './Components/MyPage/MyPage';
import RecordMain from './Components/RecordPage/RecordMain';
import ManagementMain from './Components/ManagementPage/ManagementMain';
import ManageMyPage from './Components/ManagementPage/ManageMyPage/ManageMyPage';
import PersonInChargeMove from './Components/ManagementPage/PersonInCharge/PersonInCharge';
import RecordManage from './Components/ManagementPage/recordManagePage/RecordManage';
import AnnouncementMain from './Components/ManagementPage/AnnouncementPage/AnnouncementMain';
import AnnouncementPage from './Components/AnnouncementPage/AnnouncementPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/main' element={<Main />} />
      <Route path='/main/mypage' element={<MyPage />} />
      <Route path='/main/Record' element={<RecordMain />} />
      <Route path='/management' element={<ManagementMain />} />
      <Route path='/management/mypage' element={<ManageMyPage />} />
      <Route path='/management/personincharge' element={<PersonInChargeMove />} />
      <Route path='/management/record' element={<RecordManage />} />
      <Route path='/management/announcement' element={<AnnouncementMain />} />
      <Route path='/main/announcement' element={<AnnouncementPage />} />
    </Routes>
  </BrowserRouter>
);