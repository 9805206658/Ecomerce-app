import './filterpage.css'



function FilterPage(props)
{
   let filterProperty=["brand","model","Category","Price"];
  //   define the function which perform on the click of the button
function clickHandler(event)
{
  event.preventDefault();
  let check=0;
  let filterValue=[];
  let propertyValue=[];
  let property=event.currentTarget.innerHTML;
props.productInfo.forEach
(
(value)=>{
for(let x in value)
{
  if(x==property)
  {
    propertyValue.push(value[x]);
  }
}
}
)
// filtering property value which are similar
filterValue.push(propertyValue[0]);
propertyValue.forEach((value)=>{
for(let i=0;i<=filterValue.length;i++)
{
 if(value==filterValue[i])
 {check++;}
}
if(check==0)
{ filterValue.push(value);}
check=0;
})
// providing structure on the filter value
let structureFilterValue=filterValue.map((value)=>{
return (<div>value</div>);
})
// here printing the final filter value;
return (<div>{structureFilterValue}</div>);
}
// ending of the click handler function 
let filterPropertyStructure=filterProperty.map((value)=>
  {
    return (
      
    <li className="btn" onClick={clickHandler}>{value}</li>
    
    )
});

return(
<ul  className='filterPropertyContainer'>
    {filterPropertyStructure}
</ul>
)

    
}
   
       


    

    

 export default FilterPage;