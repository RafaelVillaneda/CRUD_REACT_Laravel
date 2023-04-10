import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

const api='http://localhost:8000/api'
const ShowProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getAllProducts();
    },[])

    //TRAER TODOS LOS PRODUCTOS
    const getAllProducts = async () => {
        const response = await axios.get(`${api}/products`);
        setProducts(response.data);
      };

      const deleteProduct = async (id) => {
        await axios.delete(`${api}/product/${id}`)
        getAllProducts()
      }

  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Agregar</Link>
        </div>

        <table class="table table-dark table-striped">
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
            {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>
                            <Link to={`/edit/${product.id}`} className='btn btn-warning'>Editar</Link>
                            <button onClick={()=>deleteProduct(product.id)} className='btn btn-danger'>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
    
  )
}

export default ShowProducts