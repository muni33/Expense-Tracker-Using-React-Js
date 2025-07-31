import React,{useState} from 'react';
import './index.css';


const Info = () => {

  const [Expense, setExpense] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [category, setCategory] = useState('');  
  
const handleitems = (e) => {
    setItemName(e.target.value);
  }

const handleprice = (e) => {
    setItemPrice(e.target.value);
  }

const handlecategory = (e) => {
    setCategory(e.target.value);
  }

  const setitems = (e) => {

    if (!itemName.trim() || !itemPrice.trim() || !category.trim()) {
    alert("Please fill in all fields before submitting.");
    return; 
  }
   

    const EachExpense = {
      itemName : itemName,
      itemPrice : itemPrice,    
      category : category
    }
    setExpense(c => [...c, EachExpense]);
    e.preventDefault(); 
    setItemName('');
    setItemPrice('');
    setCategory('');
  }

  const deleteitem = (nameToDelete) => {
  setExpense(c => c.filter(item => item.itemName !== nameToDelete));
};


  return (
    <div className='whole-item'>
        <h1 className='heading'> Expense Tracker</h1>
        <div className='setscreen'>
          <div className='add-item'>
            <label for>Item Name</label>
            <input type='text' value = {itemName} placeholder='Enter Item Name' onChange={handleitems}></input><br/>
            <label>Item Price</label>
            <input type='text' value={itemPrice} placeholder='Enter Item Price' onChange={handleprice}></input><br/>
            <label>Category (Food, Travel, etc.)</label>
            <input type='text' value={category} placeholder='Enter Category' onChange={handlecategory}></input><br/>
            <input type='submit' className='submit-btn'  onClick={setitems}></input>
          </div>

          <ul className='item-list'>
            {Expense.map((item, index) => (
              <li className='item-class' key={index}>
                <li className='list'>
                  <div className='list-div'>Item Name: {item.itemName}</div>
                  <div className='list-div'>Item Price: {item.itemPrice}</div> 
                  <div className='list-div'> Category: {item.category}</div>
                  <button className='delete-btn' onClick={() => deleteitem(item.itemName)}>Delete</button>
                </li>
              </li>
            ))}
          </ul>
        </div>
    </div> 

  )
}

export default Info