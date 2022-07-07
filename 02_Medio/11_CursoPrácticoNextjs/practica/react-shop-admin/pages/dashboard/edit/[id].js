import FormProduct from '../../../components/FormProduct';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '../../../services/api';

export default function Edit() {
  const [product, setProduct] = useState({});
  const router = useRouter();

  useEffect(() => {
    //Capturo la información desde get 
    const { id } = router.query;
    
    //Valido si el router viene con la ID
    if (!router.isReady) return;
    
    //Genero metodo asincriono
    async function getProduct() {
      const response = await axios.get(endPoints.products.get(id));
      setProduct(response.data);
    }
    //Inicio el llamado del metodo axios
    getProduct();
  }, [router?.isReady]);//Permite saber si esta listo y correcto 

  return <FormProduct product={product} />;
}