import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './app.css';
import './index.css'; // Import your custom CSS
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './MainPage/Index';
import AboutPage from './MainPage/About';
import FAQPage from './MainPage/Faq';
import BlogPage from './MainPage/Blog';
import CareerPage from './MainPage/CareerPage';
 // You'll need to create this component
import LoginPage from './Login/Login'; 
import CreateAccountPage from './CreateAccount/CreateAccountPage';
import ConnectAccountPage from './CreateAccount/CompleteReg/ConnectAccount';
import ResetPasswordPage from './Password/PasswordReset';
import PasswordsetPage from './Password/PasswordSet';
import PasswordResetSuccessPage from './Password/Success';
import Email from './CreateAccount/Email';
import KYCPage from './CreateAccount/KYC/Kyc';
import Header from './MainPage/Header';
import AddAccountsPage from './CreateAccount/CompleteReg/AddAccountPage';
import StripeKYCConfirmationPage from './CreateAccount/KYC/ConfirmationKYC';
import MobileVerificationPage from './CreateAccount/KYC/MobileConfirmationPage';
import LoginPageLayout from './Login/LoginPageLayout';
import UserDashboard from './Dashboard/UserDashboard'; // Assuming this is the layout component for the login page
import ConnectAccountSearchPage from './CreateAccount/CompleteReg/ConnectAcoountSearchPage';
import SetupCompletePage from './CreateAccount/CompleteReg/CompleteSetupPage';
// Import the components for each route
import ScrollToTop from './components/ScrollToTop'; // 
import ChoosePodPage from './Dashboard/Pop ups/ChoosePodPage';

import TransactionDashboard from './Dashboard/TransactionOverview';
import PodOverview from './Dashboard/PodOverview';
import NotificationPage from './Dashboard/NotificationPage';
import UserDashboardHeader from './Dashboard/UserDashboardHeader';
import PodTracking from './Dashboard/Pop ups/PodTracking';
import PodTrackingGoal2 from './Dashboard/Pop ups/PodTrackingGoal2';
import ExportDataCard from './Dashboard/ExportModal';
import PersonalInfo from './Dashboard/Settings/PersonalInfo'; // Assuming this is the component for personal info settings
import SettingsPreferences from './Dashboard/Settings/Prefrences';
import SettingsPlans from './Dashboard/Settings/Plans';
import SettingsSecurity from './Dashboard/Settings/Security';
import AdminOverview from './Admin Dashboard/AdminOverview';
import AdminSideBar from './Admin Dashboard/AdminSideBar';
import ContributionManagement from './Admin Dashboard/ContributionManagement';
import KycManagement from './Admin Dashboard/KycManagement';
import MailManagement from './Admin Dashboard/MailMangement';
import UserManagement from './Admin Dashboard/UserManagement';
import PodManagement from './Admin Dashboard/PodManagement';
import PopContributionManagement from './Admin Dashboard/PopUp/PopContibutionManagement';
import AddNoteModal from './Admin Dashboard/PopUp/AddNote';



// You'll need to create this component
// You'll need to create this component

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
  
    
     <Routes>
    
        <Route path="/" element={<LandingPage />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/faq" element={<FAQPage />} />
       <Route path="/blog" element={<BlogPage />} />
       
       <Route path="/login" element={<LoginPage />} />
      <Route path="/createaccount" element={<CreateAccountPage />} />
      <Route path="/email" element={<Email />} />
      <Route path="/career" element={<CareerPage />} />


      <Route path="/Kyc" element={<KYCPage />} />
      <Route path="/KycConfirmation" element={<StripeKYCConfirmationPage />} />
     <Route path="/MobileVerification" element={<MobileVerificationPage />} />
    <Route path="/loginlayout" element={<LoginPageLayout />} />

      <Route path="/Addaccount" element={<AddAccountsPage />} />
      <Route path="/connectaccount" element={<ConnectAccountPage />} />
      <Route path="/searchaccount" element={<ConnectAccountSearchPage/>} />
      <Route path="/setupcomplete" element={<SetupCompletePage/>} />


      <Route path="/resetpassword" element={<ResetPasswordPage />} />
     <Route path="/setpassword" element={<PasswordsetPage />} />
      <Route path="/success" element={<PasswordResetSuccessPage />} />


      <Route path="/userdashboard" element={<UserDashboard/>} />
      <Route path="/Transaction" element={<TransactionDashboard/>} />
      <Route path="/Podoverview" element={<PodOverview/>} />
      <Route path='/notification' element={<NotificationPage/>}/>

      <Route path='/Choosepod' element={<ChoosePodPage/>}/>
      <Route path='/Podtracking' element={<PodTracking/>}/>

      <Route path='/podtracking2' element={<PodTrackingGoal2/>}/>
      <Route path='/exportdatacard' element={<ExportDataCard/>}/>
      <Route path='/personalinfo' element={<PersonalInfo/>}/>  
      <Route path='/preferences' element={<SettingsPreferences/>}/>
      <Route path='/plans' element={<SettingsPlans/>}/>
      <Route path='/security' element={<SettingsSecurity/>}/>
      {/* Add more routes as needed */}

      {/* ADMIN DASHBOARD */}
      <Route path='/admin-overview' element={<AdminOverview/>}/>
      <Route path='/admin-sidebar' element={<AdminSideBar/>}/>
      <Route path='/contribution-management' element={<ContributionManagement/>}/>
      <Route path='/kyc-management' element={<KycManagement/>}/>
      <Route path='/mail-management' element={<MailManagement/>}/>
      <Route path='/user-management' element={<UserManagement/>}/>
      <Route path='/pod-management' element={<PodManagement/>}/>  
      <Route path='/pop-contribution-management' element={<PopContributionManagement/>}/>
      <Route path='/add-note-modal' element={<AddNoteModal/>}/>

      
        
     </Routes>

   </BrowserRouter>



    
    </>
    
   

    
  );
}

export default App;