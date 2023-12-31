import { Outlet,Link } from "react-router-dom";
import { productInfo } from "./productInfo";
import './layout.css';
import { useState } from "react";
function Layout()
{
 
   let [inputValue,setInputValue]=useState('');
//    this is user for closing and opening search list
   let [check,setCheck]=useState(false);
   let [searchListForm,setSearchListForm]=useState([]);
   let [count,setCount]=useState(0);
//  ending of the listItemClck
// function SearchItemClick(event)
// {
//  let sct=productInfo.filter((value)=>
//  {
//      console.log("the value is"+event.currentTarget.value);
//      if(event.currentTarget.innerHTML==value.brand)
//      {
//       return value;
//      }
//  });
//  setCheck(false);

// }

//  function onchangeHandler(event)
//    {
//      setInputValue(event.currentTarget.value);
//        if(event.currentTarget.value.length==0)
//        {
//        setCheck(false);
//        }
//        else
//        {
//         setCheck(true);
//        }
//       let len=inputValue.length;
//     let listForm=productInfo.map((value)=>
//     {
//         if(value!=undefined)
//         {
//              if(len>=10)
//              {
//                  len=1;
//              }
//             let text=value.brand.substring(0,len);
//              {
//                 if(text===inputValue)
//                 { 
//                    return (<li className="searchListItem" onClick={SearchItemClick} >{value["brand"]}</li>);
//                 }
//              }
//         }
//     });
//         setSearchListForm(listForm);
//     }
    // ending of the onChangeHandler

  
//   this function is handle the event on the category
    function onClickHandler(event)
    {
       event.preventDefault();
       if(window.location.pathname!=='/')
       {
           alert("please customer going to the menu page");
       }
       else{
       let ele= document.querySelector(".allMenuContainer");
        if(ele)
        {
        ele.style.display="flex";
        }}
      }
    // here creating the use state
    return (
        <>
     <nav className="navigation" style={{backgroundColor:"red"}}>
       <ul className="topRow">
           <li>
           <Link to="/" className="topRowItem">Menu</Link>
           </li>
           <li>
           <Link to="/BecomeASeller" className="topRowItem">Become A Seller</Link>
           </li>
           <li>
           <Link to="/PaymentRecharge" className="topRowItem">Payment & Recharge</Link>
           </li>
           <li>
           <Link to="/HelpSupport" className="topRowItem">Help & Support</Link>
           </li>
           <li>
           <Link to="/LogisticePartener" className="topRowItem">Logistic Partener</Link>
           </li>
       </ul>
{/* here defining the second row of the navigation */} 
<div className="topRow2">
          <div className="logoCotainer">
              <div className="logo"><img src='./images/logo.webp' alt="logo"/></div>
          </div>
          <div className="categoryInfo" onClick={onClickHandler}>
             <button id="category">Catagories
             <i className="fa-solid fa-angle-down"></i>
             </button>
          </div>
          <div id="searchContainer" >
             <label htmlFor="search">
             <input type="search" id="search" placeholder="Search the item"  onChange={onchangeHandler} value={inputValue}/>
             <i className="fa-solid fa-magnifying-glass"></i>
             </label>
             {/* THME SEARCH ITEM IS GENERATED HERE */}
             {check&&(
             <ul className="searchList">
               {searchListForm} 
             </ul>)
             }
         </div>
         <div id="signInContainer">
             <Link to="/logIn" className="signIn">Log In</Link>
         </div>
        <div id="signUpContainer">
           <Link to="/signUP" className="signUp">sign Up</Link>
         </div>
        <div id="language">
                <i className="fa-solid fa-globe"></i>
                EN
                <i className="fa-solid fa-angle-down"></i>
         </div>
        <div id="shoopingCard">
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
    </div>
</nav>

<Outlet/>
</>
    )
}

export default Layout;