/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import Context  from './ContextProvider'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import { useState, useEffect, useContext } from "react";


export default function Cart(){
    const { cartItems,onAdd,onRemove} = useContext(Context);
    const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cartItems.reduce((acc, curr) => acc + Number(curr.subtotal), 0));
  }, [cartItems]);
    return(
        <>
        <div className='total-container'>
            <h1>TotalPrice</h1>
            <h1>Rs:{total}</h1>
        </div>
        <div className='products'>
        {cartItems.map(product => {
        return ( 
        <Card className="container" key={product.id} >
            <div>
            <Card.Img className="image-container" variant="top" src={product.images} /></div>
            <div>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    <p>{product.description}</p>
                    <p style={{color:"red"}}>Stock:{product.stock}</p>
                </Card.Text>
                <ButtonGroup className="me-2" ><Button onClick={()=>{onRemove(product)}}>-</Button> <Button>{product.qty}</Button> <Button onClick={()=>{onAdd(product)}}>+</Button></ButtonGroup>
                <Card.Text><h1>Subtotal:Rs.{product.subtotal}</h1></Card.Text>
            </Card.Body></div>

        </Card> ); })}</div>
        </>
    )
}
