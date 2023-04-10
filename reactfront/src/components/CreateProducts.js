import React ,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const api='http://localhost:8000/api/product'
const CreateProducts = () => {
    const [description,setDescription]=useState('');
    const [price,setPrice]=useState(0);
    const [stock,setStock]=useState(0);
    const navigate=useNavigate();

    const agregarProducto = async (e) =>{
        e.preventDefault();
        await axios.post(api,
            {
                description:description,
                price:price,
                stock:stock
            })
           navigate('/');
    }
    return (
        <div>
            <h3>Create product</h3>
            <form onSubmit={agregarProducto}>
                <div className='mb3'>
                    <label className='form-abel'>Descripcion del producto</label>
                    <input
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb3'>
                    <label className='form-abel'>Precio del producto</label>
                    <input
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                <div className='mb3'>
                    <label className='form-abel'>Stock del producto</label>
                    <input
                        value={stock}
                        onChange={(e)=>setStock(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
        </div>
    )
    }

export default CreateProducts