import React, { useState } from 'react';
import '../product/Category/style.css'
import {Alert, Form} from 'react-bootstrap';
import AllServices from "./Services";
import {Link, useHistory, useParams} from "react-router-dom";

const Index= () => {

    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [mobile, setMobile] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const history = useHistory()
    const {id} = useParams()

    const clickSubmit = (event) =>{
        event.preventDefault();
        const data = { address, email, firstName, lastName, mobile }
        AllServices.create(data)
            .then(response=>{
                setSuccess(response.data.message)
                setError('')
                setAddress('')
                setMobile('')
                setEmail('')
                setLastname('')
                setFirstname('')

            })
            .catch(error =>{
                setError(true)
                setSuccess('')
            })



    }
    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>Veiller complète tous les champs</center></strong>
        </Alert>
    )
    const SuccessClose = () =>{
        setSuccess('')
        history.push('/suppliers/all-suppliers')
    }
    const showSuccess = () => (

        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center>{success} {' '}
                <span className={'text-center btnX'} onClick={SuccessClose}>X</span></center> </strong>
        </Alert>
    )
    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title"> {id? "Editer": "Ajouter"} un Fournisseur </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/suppliers/all-suppliers'}>
                            <button type="button" className="btn btn-primary btn-fw">
                                <span className="icon-bg "><i className="mdi mdi-arrow-left-bold-circle-outline "></i>Retour</span>
                            </button>
                        </Link>
                    </ol>
                </nav>
            </div>
            <div className="row maintable">
                <div className="col-md-3"></div>
                <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            {
                                showError()
                            }
                            {
                                showSuccess()
                            }
                            <form className="forms-sample">
                                <Form.Group>
                                    <label htmlFor="exampleInputUsername1">Nom</label>
                                    <Form.Control
                                        type="text"
                                        id="exampleInputUsername1"
                                        placeholder="Nom"
                                        size="lg"
                                        value={firstName}
                                        onChange={(e)=>setFirstname(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputUsername1">Prénom</label>
                                    <Form.Control
                                        type="text"
                                        id="exampleInputUsername1"
                                        placeholder="Prénom"
                                        size="lg"
                                        value={lastName}
                                        onChange={(e)=>setLastname(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <Form.Control
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputPassword1">Mobile</label>
                                    <Form.Control
                                        type="number"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Mobile"
                                        value={mobile}
                                        onChange={(e)=>setMobile(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputConfirmPassword1">Adresse</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputConfirmPassword1"
                                        placeholder="adresse"
                                        value={address}
                                        onChange={(e)=>setAddress(e.target.value)}
                                    />
                                </Form.Group>

                                <button
                                    type="submit"
                                    className="btn btn-primary mr-2"
                                    onClick={(event)=>clickSubmit(event)}
                                >
                                    {id? "Editer" : "Envoyer"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Index
