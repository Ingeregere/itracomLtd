import React, {useEffect, useState} from 'react';
import '../../product/Category/style.css'
import AllServices from "./Services";
import {Link, useParams} from "react-router-dom";


const Index= () => {

    const [values, setValues] = useState([])

    const {id} = useParams()

    useEffect(()=>{
        getAll()

    },[])

    const getAll = () =>{
        AllServices.getAll().then((response) =>{
            setValues(response.data)
        })
    }

    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title"> Voir tous les factures </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">

                        <Link to={'/command/add-invoice'}>
                            <button type="button" className="btn btn-primary btn-fw">Ajouter</button>
                        </Link>
                    </ol>
                </nav>
            </div>

            <div className="row maintable">

                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive ">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr className={'text-center'}>
                                        <th >N<sup>o</sup></th>
                                        <th >Facture</th>
                                        <th >Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        values.map((current,index) =>(
                                            <tr key={current.id} className={'text-center'}>
                                                <td >{index+1}</td>
                                                <td>{current.invoice}</td>

                                                <td>
                                                    <Link to={`/command/edit-invoice/${current.id}`} className={'text-decoration-none'}>
                                                        <span className="icon-bg "><i className="mdi mdi-pen "></i>Editer</span>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Index
