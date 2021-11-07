import React, {useEffect, useState} from 'react';
import {Alert, Badge, Form} from 'react-bootstrap';
import AllServices from "./Services";
import {Link, useHistory, useParams} from "react-router-dom";



const Index= () => {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const history = useHistory()
    const {id} = useParams()

    useEffect(()=>{
        getAllUserProfile()

    },[])

    const getAllUserProfile = () =>{
        AllServices.getAll().then((response) =>{
            setUsers(response.data)
        })
    }

    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>Veiller complète tous les champs</center></strong>
        </Alert>
    )
    const SuccessClose = () =>{
        setSuccess('')
    }
    const showSuccess = () => (

        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center>{success} {' '} <button
                type="button"
                className="btn btn-primary
                btn-rounded btn-fw"
                onClick={SuccessClose}
            >Fermer</button></center> </strong>
        </Alert>
    )
    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title"> Voir tous les utilisateurs </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/user-page/add-user'}>
                            <button type="button" className="btn btn-primary btn-fw">Ajouter</button>
                        </Link>
                    </ol>
                </nav>
            </div>

            <div className="row maintable">
                <div className="col-lg-12 grid-margin stretch-card ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Tous les utilisateurs</h4>

                            <div className="table-responsive ">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr className={'text-center'}>
                                        <th >N<sup>o</sup></th>
                                        <th >Nom</th>
                                        <th >Prénom</th>
                                        <th >Nom d'utilisateur</th>
                                        <th >Mobile</th>
                                        <th >Adresse</th>
                                        <th >Date de naissance</th>
                                        <th >Sex</th>
                                        <th >role</th>
                                        <th >Modifier</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        users.map((b,index) =>(
                                            <tr key={b.id} className={'text-center'}>
                                                <td >{index+1}</td>

                                                <td>{b.firstName}</td>
                                                <td>{b.lastName}</td>
                                                <td>{b.username}</td>
                                                <td>{b.mobile}</td>
                                                <td>{b.address}</td>
                                                <td>{b.birthDay}</td>
                                                <td>{b.sex}</td>
                                                <td>{b.role}</td>
                                                <td>
                                                    <Link to={`/user-page/edit_user/${b.id}`} className={'text-decoration-none'}>
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
