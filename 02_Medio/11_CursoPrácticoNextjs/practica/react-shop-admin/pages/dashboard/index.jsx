import React, {useState, useRef} from 'react';
import endPoints from "../../services/api";
import useFetch from "../../hooks/useFetch";
import Paginate from  '../../components/Paginate';
import { Chart } from '../../common/Chart';
import bolsa from '../../public/bolsa.png';
import Image  from 'next/image';

  
 export default function Dashboard() {

//Declaración de variables 
  const PRODUCT_LIMIT = 5;
  const PRODUCT_OFFSET = 0;
  const [offsetProducts, setOffsetProducts] = useState(PRODUCT_OFFSET);

  //Listo y Pagino 
  const products = useFetch(endPoints.products.paginate(PRODUCT_LIMIT, offsetProducts));
  const totalProducts = useFetch(endPoints.products.paginate(0, 0)).length;
    

  //Calculo para ver las barras 
  const categoryNames = products?.map((product) => product.category);
  const categoryCount = categoryNames?.map((category) => category.name);

  const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

    
  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOccurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', 'f3ba2f', '#2a71d0'],
      },
    ],
  };

    return (
      <>
      <Chart className="mb-8 mt-2" chartData={data} />
      {totalProducts > 0 && <Paginate totalItems={totalProducts} itemsPerPage={PRODUCT_LIMIT} setOffset={setOffsetProducts} neighbours={3}></Paginate>}
        <div className="flex flex-col mt-5">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Nombre Producto
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Descripción
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Categoria
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Precio
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                        Acción
                      </th>                      
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {products?.map((lista) => (
                      <tr key={lista.id}>
                        <td className="px-2 py-4 ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <Image className="h-10 w-10 rounded-full" src={bolsa} alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{lista.title}</div>
                              <div className="text-sm text-gray-500">{lista.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 ">
                          <div className="text-sm text-gray-900">{lista.category.name}</div>
                          
                        </td>
                        <td className="px-6 py-4 ">
                          <div className="text-sm text-gray-500">{lista.price}</div>
                        </td>
                        <td className="px-6 py-4  text-sm text-gray-500">{lista.id}</td>
                        <td className="px-6 py-4  text-right text-sm font-medium">
                          <a href="/edit" className="text-indigo-600 hover:text-indigo-900">
                            Edit
                          </a>
                          <br/>
                          <a href="/edit" className="text-indigo-600 hover:text-indigo-900">
                            Eliminar
                          </a>                          
                        </td>                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  