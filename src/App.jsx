import React from 'react';
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
import PodTrackingGoalPage2 from './Dashboard/Pop ups/PodTrackingGoalPage';
import TransactionDashboard from './Dashboard/TransactionOverview';
import PodOverview from './Dashboard/PodOverview';
import NotificationPage from './Dashboard/NotificationPage';
import UserDashboardHeader from './Dashboard/UserDashboardHeader';



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
      
      {/* Add more routes as needed */}
      
        
     </Routes>

   </BrowserRouter>


    
    </>
    
   

    
  );
}

export default App;