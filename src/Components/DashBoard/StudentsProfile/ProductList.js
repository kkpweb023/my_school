import React, { useEffect, useState } from 'react';
import './ProductList.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';


const ProductList = () => {

  let navigate = useNavigate();

  const [data, setData] = useState([]);
  let [isLoading, setLoading] = useState(false);

  const getProduct = () => {
    setLoading(true);
    axios.get('http://localhost:5000/list-Product')
      .then((result) => {
        setData(result.data)
        setLoading(false);
      })
      .catch((error) => console.log("! 404 data fetch failed"));

      
  }
  useEffect(() => {
    getProduct();
  }, [])


  function handleEdit(id){
    navigate(`/update/${id}`);  
  }

  function handleDelete(del) {

    axios.delete(`http://localhost:5000/delete-Product/${del}`)
      .then((result) => {
        if (result.data.deletedCount) {
          getProduct()
          alert('Delete Successfully')
        } else {
          alert('Delete failed')
        }
      })
      .catch((error) => console.log('deletion failed'));
  }


  function handleSearch(e){

        let key = e.target.value;

        if(key){

          axios.get(`http://localhost:5000/search/${key}`)
          .then((result)=>setData(result.data))
          .catch((error)=>console.log("Search Failed"));

        }else{
            getProduct();
        }
  }


  return (

    <div className='product-list-div'>

      <h1>Product List</h1>

      <input type={'search'} 
              placeholder={'Search Product...'} 
              className={'search_box'} 
              onChange={handleSearch} 
            />

      {isLoading ?
        <Audio
          height="374"
          width="150"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor='#F4442E'
          barColor='#51E5FF'
        />
        :
        <Table striped hover bordered className="table" >
          <thead className="thead">
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              data.length > 0 ?

              data.map((value, index) =>

                <tr key={index}>
                  <td data-label="S.No.">{index + 1}</td>
                  <td data-label="Name">{value.name}</td>
                  <td data-label="Price">$ {value.price}</td>
                  <td data-label="Category">{value.category}</td>
                  <td data-label="Company">{value.company}</td>

                  <td data-label="Action">
                    {<EditIcon color='primary' className='edit' onClick={() => handleEdit(value._id)} />}

                    {<DeleteForeverIcon color='error' className='delete' onClick={() => handleDelete(value._id)} 
                    />}
                  </td>
                </tr>
              ): <tr><td style={{border:"none",fontSize:"40px",fontWeight:"bold"}}>No data Found</td></tr>}
          </tbody>
        </Table>
      }
    </div>
  )
}
export default ProductList;