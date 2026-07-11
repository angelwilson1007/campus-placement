import React from 'react'

const AddRegistration = () => {
  return (
    <div>

        <div className="container">
            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">registration number</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">full name</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">aadhar number</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">email address</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">phone number</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">branch/department</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">sslcmark(%)</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">plus two mark(%)</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">UG Degree name and mark(%) </label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">pg degree name and mark(%)</label>
                          <input type="text" className="form-control" />
                    </div>
                    
                    
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <button className="btn btn-primary">submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddRegistration