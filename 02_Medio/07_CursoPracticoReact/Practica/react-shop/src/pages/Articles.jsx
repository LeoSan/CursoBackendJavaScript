import React, {useState} from 'react';
//Importo Componenentes 
import Product from '../components/Product';

//importamos hooks 
import useGetProduct from '../hooks/useGetProduct';

const Articles = () => {

        //Declaración 
        const [ card, setCard] = useState([]);
        const API = 'https://api.escuelajs.co/api/v1/products';
        const products = useGetProduct(API);

  return (
    <div>
        <section className="main-container">
            <div className="cards-container">
            {products.map((product) => (
                <Product key={product.id}  product={product}/>
              ))}
            </div>
        </section>
    </div>
  )
}

export default Articles