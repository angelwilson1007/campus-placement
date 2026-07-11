import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewAllRegistration = () => {
    const[data,changeData]= useState([])

    const fetchdata = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(
    (response) => {
        changeData(response.data)
    }
).catch()
    }

    useEffect(
        ()=>{
            fetchdata()
        }
    )
       
    return (
        <div>
            

            <div className="container mt-4">
                <div className="row g-4">
                    {data.map(
                        (value,index)=>
                        {return(
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Student Registration</h5>
                                <p><b>Reg NO:</b>{value.regNo}</p>
                                <p><b>Full name:</b>{value.fullName}</p>
                                <p><b>Aadhar NO:</b>{value.aadharNo}</p>
                                <p><b>Email:</b>{value.email}</p>
                                <p><b>phoneNumber:</b>{value.phoneNumber}</p>
                                <p><b>Branch:</b>{value.branch}</p>
                                <p><b>SSLC Mark:</b>{value.sslcMark}</p>
                                <p><b>PLusttwo Mark:</b>{value.plustwocMark}</p>
                                <p><b>UG Degree:</b>{value.ugDegree}</p>
                                <p><b>UG Mark:</b>{value.ugMark}</p>
                                <p><b>PG Degree:</b>{value.pgDegree}</p>
                                <p><b>PG Mark:</b>{value.pgMark}</p>
                                
                            </div>
                        </div>
                    </div>
                        )}
                    )}

                </div>
            </div>
        </div>
    );
};

export default ViewAllRegistration