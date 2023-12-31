
import { toHaveDisplayValue } from "@testing-library/jest-dom/matchers";
import {productInfo} from "./productInfo";
import './productList.css';
import React from 'react';
import FilterPage from "./filterpage";
class ProductList extends React.Component
 {
    constructor(props)
      {
         super(props);
         this.state={
            check:false,
            check2:false,
            colorsGroup:[]
                    }
         this.shapeProvider=this.shapeProvider.bind(this);
         // this.filterColor=this.filterColor.bind(this);
         // this.filterShape=this.filerShape.bind(this)
      }
   //   filterColor(value)
   //    {
   //      // filtering property value which are 
   //      let colors=[];
   //      if(value=='')
   //      {
   //      value=productInfo;
     
   //      // this.setState({arrayForm:value});
   //      }
   //    if(value)
   //    {
   
   //      this.props.arrayForm.map((value)=>
   //      {
   //       for(let i=0;i<colors.length;i++)
   //       {
   //          if(value.Color!=colors[i])
   //          {
   //             colors.push(value.Color);
   //          }
   //       }});
   //       console.log("the colors is "+colors);
   //       this.setState({colorsGroup:colors});
   //    }

   //    }
   //  filerShape(value)
   //  {
   //    let colorForm=value.map((value)=>
   //    {
   //      return (<li>{value}</li>)
   //    })
   //    return colorForm;
   // }
      // it provide shape for the selling item ;
      shapeProvider(value)
      {
         if(value=='')
         {
         value=productInfo;
         // this.setState({arrayForm:value});
         }
         if(value)
         {
      let arrayForm=value.map((value)=>
              {
                 return(
                 <div className="productContainer">
                  <img src={value.Image} alt={value.Name}className="image"/>
                 <div className="productInfo">
                    <p >
                    <a href="">about {value.Name}</a><br/>
                        <span className="carName">Name:{value.Name?value.Name:value.brand}</span><br/>
                    <span className="carPrice">price:{value.Price?value.Price:"no price listed"}</span>
                    </p>
                 </div>
              </div>)});
              return arrayForm;
            }
            // this.filterColor(this.props.arrayForm);
         }
         render()
         {
         return(
            <>
            <div className="mainContainer">
             <div className="filtering">
              <h2 className="filterHeader">Filter the product</h2>
              <div className="filterColor">
              {/* {this.filerShape(this.state.colorsGroup)} */}
              </div>
             </div>
            <div className="productList">
              {this.shapeProvider(this.props.arrayForm)}
             </div>
             </div>
            </>
         )
      }
 }
 export default  ProductList;