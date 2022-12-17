import React from "react";

function Item({ item , onEditItem , onDeleteItem}) {

  function handleAddToCart(){
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInCart: !item.isInCart,
      })
    })
    item.isInCart = !item.isInCart
    onEditItem(item)
  }

  function handleDeleteItem(event){
    event.preventDefault()
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE"
    })
    onDeleteItem(item)
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"} onClick={handleAddToCart}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteItem}>Delete</button>
    </li>
  );
}

export default Item;
