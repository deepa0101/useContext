import Context  from './ContextProvider';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home(){
    const { products,onAdd } = useContext(Context);
    return(
        <>
        <div className='home-container'>
        {products.map(product => {
        return ( 
        <Card  className="container" key={product.id} >
            <Card.Img className="image-container" variant="top" src={product.images} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    <p>{product.description}</p>
                <p>Rating: {product.rating}</p>
                </Card.Text>
                <Button variant='primary' onClick={()=>{onAdd(product)}}>Add to cart</Button>
            </Card.Body>
        </Card> ); })}
        </div>
        </>
    )

}