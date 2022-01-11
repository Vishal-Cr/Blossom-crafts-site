import { useRef,useState } from 'react';
import classes from './ItemForm.module.css';
import Input from '../UI/Input';
const ItemForm=props=>{
    const[amountIsValid,setAmountIsValid]=useState(true);
   
    const amountInputRef=useRef();
   
    const submitHandler=e=>{
        e.preventDefault();
        const enteredAmount=amountInputRef.current.value;
       //this is always a string
        const enteredAmountNumber=+enteredAmount;
        //this is to convert it into a number.   
        if(enteredAmount.trim().length===0||enteredAmountNumber>5||enteredAmountNumber<1){
            setAmountIsValid(false);
            return;
        }
      props.onAddToCart(enteredAmountNumber);
      //forward of enteredamount number because onaddtocart need more data than just enteredAmount.

    }
return (<form className={classes.form}
onSubmit={submitHandler}>
<Input label="Amount" ref={amountInputRef}
        input={{
        id:'amount_'+props.id,
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1',
        
    }}/>
    <button type='submit'>+Add</button>
{!amountIsValid && <p>Please enter a valid amount(1-5).</p>}
</form>)
}

export default ItemForm;