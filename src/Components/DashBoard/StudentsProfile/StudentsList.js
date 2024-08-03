import React, { useContext } from 'react';
import './StudentsList.css';
import Table from 'react-bootstrap/Table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Audio } from 'react-loader-spinner';
import axios from 'axios';
import { MyContext } from '../StdProfile';

let port = `https://notesdatabase-ycw0.onrender.com` || `http://localhost:4000`;


const StudentsList = () => {

  const { data, isLoading, getInfo } = useContext(MyContext);



 
  function handleDelete(del) {

    axios.delete(`${port}/delete-info/${del}`)
      .then((result) => {
        if (result.data.deletedCount) {
          getInfo()
          alert('Delete Successfully')
        } else {
          alert('Delete failed')
        }
      })
      .catch((error) => console.log('deletion failed'));
  }

  

  return (

    <div className='student-list-div'>


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
              <th>Full Name</th>
              <th>Subject</th>
              <th>Remark</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

          {
              data.length > 0 ?

              data.map((value, index) =>
   
                <tr key={index}>
                  <td data-label="S.No.">{index + 1}</td>
                  <td data-label="Full Name">{value.name}</td>
                  <td data-label="Subject">{value.subject}</td>
                  <td data-label="Remark">{value.remarks}</td>
                  <td data-label="Action">
                    <EditIcon color='primary' className='edit' />

                    <DeleteForeverIcon color='error' className='delete' onClick={() => handleDelete(value._id)}
                    />
                    <VisibilityIcon fontSize="small" color="primary" className='view'></VisibilityIcon>
                  </td>
                </tr>
              ): <tr><td style={{border:"none",fontSize:"40px",fontWeight:"bold"}}>No data Found</td></tr>}
          </tbody>
        </Table>
         }
    </div>
  )
}
export default StudentsList;