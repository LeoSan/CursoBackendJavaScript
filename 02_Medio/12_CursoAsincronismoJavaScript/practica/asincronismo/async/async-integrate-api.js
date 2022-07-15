import fetch from 'node-fetch';
const API='https://api.escuelajs.co/api/v1';

//Creamos nuestro metodo para conectar 
async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}


//Creamos ya nuestra función que nos permite interactuar con la API 
const anotherFunction = async(urlApi)=>{
    try{
        const products=await fetchData(`${urlApi}/products`);
        const product=await fetchData(`${urlApi}/products/${products[0].id}`);
        const category=await fetchData(`${urlApi}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title);
        console.log(category.name);
    }catch(error){
        console.error(error);
    }
}
anotherFunction(API);