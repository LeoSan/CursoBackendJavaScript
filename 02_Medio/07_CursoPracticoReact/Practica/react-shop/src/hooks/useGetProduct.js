import React, {useState, useEffect} from 'react';
import axios from 'axios';


const useGetProduct = (API)=>{

            //Declaración 
            const [ card, setCard] = useState([]);
            const [products, setProduct] = useState([]);
    
            useEffect( async () => {
                const response = await axios.get(API);
                setProduct(response.data);
                console.log(response.data);
            }, []);
            
            return products; 


}

export default useGetProduct; 