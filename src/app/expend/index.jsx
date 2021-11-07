import React, {useEffect, useState} from 'react';
import '../product/Category/style.css'
import AllServices from "./Services";
import {Link} from "react-router-dom";


const Index= () => {
    const [values, setValues] = useState([])

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
                <h3 className="page-title"> Voir tous les dépenses </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/expend/export'}>
                            <button type="button" className="btn btn-warning btn-fw">Export</button>
                        </Link>
                        <Link to={'/expend/add-expend'}>
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
                                        <th >Dépenses</th>
                                        <th >Montant</th>
                                        <th >Déscription</th>
                                        <th >Date</th>
                                        <th >Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        values.map((current,index) =>(
                                            <tr key={current.id} className={'text-center'}>
                                                <td >{index+1}</td>
                                                <td>{current.expenditure}</td>
                                                <td>{current.amount}</td>
                                                <td>{current.description}</td>
                                                <td>{current.createdAt}</td>
                                                <td>
                                                    <Link to={`/expend/edit-expend/${current.id}`} className={'text-decoration-none'}>
                                                        <span className="icon-bg "><i className="mdi mdi-pen "></i>Editer</span>
                                                    </Link> {" "}
                                                    <Link to={`/expend/delete-expend/${current.id}`} className={'text-decoration-none text-danger'}>
                                                        <span className="icon-bg "><i className="mdi mdi-delete "></i>Effacer</span>
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
