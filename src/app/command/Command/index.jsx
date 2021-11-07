import React, {useEffect, useState} from 'react';
import '../../product/Category/style.css'
import AllServices from "./Services";
import {Button} from 'react-bootstrap'
import {Link, useParams, useHistory} from "react-router-dom";


const Index= () => {

    const [values, setValues] = useState([])
    const {id} = useParams()
    const history = useHistory()

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
                <h3 className="page-title"> Voir tous les commandes </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/command/export'}>
                            <button type="button" className="btn btn-warning btn-fw">Export</button>
                        </Link>
                        <Link to={'/command/add-command'}>
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
                                        <th >Nom du produit</th>
                                        <th >Quantité</th>
                                        <th >P.U</th>
                                        <th >Date</th>
                                        <th >Adresse du fournissseur</th>
                                        <th >Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        values.map((current,index) =>(
                                            <tr key={current.id} className={'text-center'}>
                                                <td >{index+1}</td>
                                                <td>{current.product}</td>
                                                <td>{current.quantity}</td>
                                                <td>{current.pu}</td>
                                                <td>{current.createdAt}</td>
                                                <td>{current.supplier}</td>
                                                <td>
                                                    <Link to={`/command/edit-command/${current.id}`} className={'text-decoration-none'}>
                                                        <span className="icon-bg "><i className="mdi mdi-pen "></i>Editer</span>
                                                    </Link> {" "}
                                                    <Link to={`/command/delete-command/${current.id}`} className={'text-decoration-none text-danger'}>
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
