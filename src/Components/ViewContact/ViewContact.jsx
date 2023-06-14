import React from 'react'

const ViewContact = ({ viewContact }) => {
    return (
        <div>
            <div className="modal fade" id="staticBackdropView" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Contact Detail</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='d-flex justify-content-center'>
                                <div className='d-flex flex-column align-items-end mx-3'>
                                    <h6>Name:</h6>
                                    <h6>Email:</h6>
                                    <h6>Mobile:</h6>
                                    <h6>Address:</h6>
                                </div>
                                <div className='d-flex flex-column align-items-start'>
                                    <h6>{viewContact.name}</h6>
                                    <h6>{viewContact.email}</h6>
                                    <h6>{viewContact.mobile}</h6>
                                    <h6>{viewContact.address}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewContact