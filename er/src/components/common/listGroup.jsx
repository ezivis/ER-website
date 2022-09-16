import React from 'react';

const ListGroup = (props) => {
  const{items,textProperty,valuePropperty,onItemSelect,selectedItem}=props;

  return <ul className="list-group">
    {items.map(item =><li 
    onClick = {()=>onItemSelect(item)} 
    key={item[valuePropperty]} 
    className={item === selectedItem?"list-group-item active":"list-group-item"}>{item[textProperty]  }</li>)}
  </ul>
}
 
ListGroup.defaultProps ={
  textProperty : "name",
  valuePropperty : "_id"
}
export default ListGroup;