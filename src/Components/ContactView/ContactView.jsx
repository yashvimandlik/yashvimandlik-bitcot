import React from 'react'
import contactImg from './profile.png'
import AddContact from '../AddContact/AddContact'
import EditContact from '../EditContact/EditContact'
import ViewContact from '../ViewContact/ViewContact'
import DeleteModal from '../DeleteModal/DeleteModal'

const ContactView = () => {

  const contacts = [
    {
      id: 1,
      name: "Aaron",
      mobile: "5785664545",
      email: "aaron@gmail.com",
      address: "Shop No. 26, Ground Floor C-21 Mall, AB Rd, Indore, Madhya Pradesh 452010"
    },
    {
      id: 2,
      name: "Buincy Hanson",
      mobile: "5785664545",
      email: "hanson@gmail.com",
      address: "Shop No. 26, Ground Floor C-21 Mall, AB Rd, Indore, Madhya Pradesh 452010"
    },
    {
      id: 3,
      name: "Yashvi Mandlik",
      mobile: "5785664545",
      email: "sample@gmail.com",
      address: "Shop No. 26, Ground Floor C-21 Mall, AB Rd, Indore, Madhya Pradesh 452010"
    }
  ]

  return (
    <div className='container bg w-25 mt-3 d-flex flex-column justify-content-center align-items-center'>
      <button type="button" className='btn btn-primary px-5 w-100' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Contact</button>
      <AddContact />
      <input className='px-2 py-1 m-2 rounded' type="search" placeholder='Search contact' />
      <div className='w-100'>
        {
          contacts.map((data) => {
            return (
              <div key={data.id} className='w-100 d-flex justify-content-between border'>
                <div>
                  {data.id}
                </div>

                <img className='mx-2' style={{ width: "2rem", height: "2rem" }} src={contactImg} alt="" />
                <div className='d-flex align-items-center'>
                  <div>
                    <p className='m-0'>{data.name}</p>
                    <p className='m-0'>{data.mobile}</p>
                  </div>
                </div>

                <div className='d-flex align-items-center'>
                  <i style={{cursor: "pointer"}} className="fa-solid mx-2 fa-eye" data-bs-toggle="modal" data-bs-target="#staticBackdropView"></i>
                  <ViewContact viewContact={data} />


                  <i style={{cursor: "pointer"}} className="fa-solid mx-2 fa-trash" data-bs-toggle="modal" data-bs-target="#staticBackdropDelete"></i>
                  <DeleteModal deleteContact={data}/>

                  
                  <i style={{cursor: "pointer"}} className="fa-solid mx-2 fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#staticBackdropEdit"></i>
                  <EditContact contactData={data} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ContactView