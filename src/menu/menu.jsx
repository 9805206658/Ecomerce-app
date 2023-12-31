
import { toHaveDisplayValue } from "@testing-library/jest-dom/matchers";
import {productInfo} from "../component/productInfo";
import './menu.css';
import React from 'react';
import ProductList from "../component/productList";

class Menu extends React.Component
{
   constructor(props)
   {
      super(props);
      this.state={
         category:["Sedan" ,"Coupe","Hatchback"," Convertible", " SUV (Sports Utility Vehicle)", " Crossover", " Wagon"],
         check0:true,//it is control the first menu
         check:true,//it control the second menu
         categoryItem:[],
         eleSearchItem:[],
      
      }
      this.valueReset=this.valueReset.bind(this);
      this.mouseoverHandler=this.mouseoverHandler.bind(this);
      this.mouseoverHandlerItem=this.mouseoverHandlerItem.bind(this);
      
      this.onclickItem=this.onclickItem.bind(this);
      
   }
   
    valueReset()
     {
       this.setState({check0:true,check:false,check2:false});
     }


 mouseoverHandler(event)
{
    //   event.preventDefault();
      let mainEle=event.target;
      let childFirst=event.target.childNodes[1];
      let selectValue;
      if(event.target.childNodes[0])
      {
       selectValue=event.target.childNodes[0].nodeValue;
      }
      if(childFirst)
      {
        childFirst.className="fa-solid fa-angle-right rightArrow"
      }
      mainEle.className="item itemHoverEffect"
      // here selecting brand according to the card
      let categoryItems=productInfo.filter((value)=>{
         for(let x in value)
         {
            console.log(value);
          if(value[x]==selectValue)
            {
               return value;
            }
         }
      })
this.setState({categoryItem:categoryItems});
this.setState({check:true});
 }
//  ending of the mouseover hanlder
mouseOutHandler(event)
{
//    event.preventDefault();
   let mainEle=event.target;
   let childFirst=event.target.childNodes[1];
   if(mainEle)
   {
   mainEle.className="item";
   }
   if(childFirst)
   {
   childFirst.className="fa-solid fa-angle-right rightArrowHide";
   }
}
// this function sort element on the basis of the brand
mouseoverHandlerItem(event)
{
// here mainEle and childFirst element different for set the different
   let mainEle=event.target;
   let childFirst=event.target.childNodes[1];
   let selectvalue;
   if(mainEle)
   {
   selectvalue=event.target.childNodes[0].nodeValue;
   childFirst.className="fa-solid fa-angle-right rightArrow";
   }
   mainEle.className="item itemHoverEffect";
   // here filtering car according to the brand
   let categoryItems=productInfo.filter((value)=>
   {
     if(selectvalue==value.brand)
     {
      return value;
     }
   })
  this.setState({arrayForm:categoryItems,check2:true});

}
mouseOutHanlderItem(event)
{let mainEle=event.target;
   let childFirst=event.target.childNodes[1];
   if(mainEle)
   {
   mainEle.className="item";
   }
   if(childFirst)
   {
   childFirst.className="fa-solid fa-angle-right rightArrowHide";
   }
}
onclickItem(event)
{
    event.preventDefault();
    this.setState({check:false,check0:false});
    this.valueReset();
    let ele=document.querySelector(".allMenuContainer");
// here changing the display for switching the context
    if(ele)
    {
    document.querySelector(".allMenuContainer").style.display="none";
    }
}

// ListSelector(checkApp,layoutCheck)
// {

//    if(layoutCheck==true)
//    {
//       this.setState({checkApp:false});
//    }
// if(checkApp)
// {
//    if(this.state.check)
//    {
//       return <ProductList/>
//    }
//    else
//    {
//        return <ProductList arrayForm={this.state.categoryItem}/>
//    }
// }
// else
// {
//  return <ProductList arrayForm={this.state.SearchCategoryItems}/>
// }

// }
// here writing the code for the search list item 

 SearchItemClick(event)
{
 let sct=productInfo.filter((value)=>
 {
     console.log("the value is"+event.currentTarget.value);
     if(event.currentTarget.innerHTML==value.brand)
     {
      return value;
     }
 });
 setCheck(false);

}

 onchangeHandler(event)
   {
        setInputValue(event.currentTarget.value);
        if(event.currentTarget.value.length==0)
        {
        setCheck(false);
        }
        else
        {
         setCheck(true);
        }
       let len=inputValue.length;
       let listForm=productInfo.map((value)=>
       {
            if(value!=undefined)
            {
                 if(len>=10)
                 {
                     len=1;
                 }
                let text=value.brand.substring(0,len);
                 {
                    if(text===inputValue)
                    { 
                       return (<li className="searchListItem" onClick={SearchItemClick} >{value["brand"]}</li>);
                    }
                 }
            }
        });
        setSearchListForm(listForm);
    }
   //  here ending the processs
render()
{

   if(this.props.counter)
     {
        this.valueReset();
     }
 // it help select the catagory
  let categoryForm=this.state.category.map((value)=>
      {
      return(<li className="item" onMouseOver={this.mouseoverHandler} onMouseOut={this.mouseOutHandler}>{value}
      <i class="fa-solid fa-angle-right rightArrowHide"></i>
      </li>);
      })
   // it help select the brand
   let itemForm=this.state.categoryItem.map((value)=>
   {
      return (<li className="item" onMouseOver={this.mouseoverHandlerItem} onMouseOut={this.mouseOutHandler} onClick={this.onclickItem}>{value.brand}
      <i className="fa-solid fa-angle-right rightArrowHide"></i>
      </li>);
   })
  
return(
      <>
         <div className="allMenuContainer">
              {this.state.check0 && (<div className="MenuContainer">
              {categoryForm}
             </div>)}
             {/* this is for the item */}
             {this.state.check &&
              (<div className="MenuContainer">
              {itemForm}
              </div>)
              }
            </div>
            {
               // this.ListSelector(this.state.checkApp,this.state.layoutCheck)
            this.state.check?<ProductList/>:<ProductList arrayForm={this.state.categoryItem}/>
              
            }
   </>
     );
    }
}
export default  Menu;
