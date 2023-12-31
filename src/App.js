
import './App.css';
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import ProductList from './component/productList';
import Layout from './component/Layout';
import BecomeASeller from './topLevel/BecomeASeller';
import PaymentRecharge from './topLevel/Payment&Recharge';
import HelpSupport from './topLevel/Help&support';
import LogisticParteners from './topLevel/LogisticePartener';
import NoPages from './topLevel/NoPages';
import SignUp from './component2/signup';
import LogIn from './component2/login';
import Menu from './menu/menu';

function App() 
{
    return (
     <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Menu />}/>
           <Route path="/BecomeASeller" element={<BecomeASeller/>}/>
          <Route path="PaymentRecharge" element={<PaymentRecharge/>}/>
          <Route path="HelpSupport" element={<HelpSupport/>}/>
          <Route path="LogisticePartener"element={<LogisticParteners/>}/>
          <Route path="logIn"element={<LogIn/>}/>
          <Route path="signUp"element={<SignUp/>}/>
          <Route path="*" element={<NoPages/>} />

          </Route>
      </Routes>
      </BrowserRouter>
    </>
    )
 
}

export default App;
