import React, { useState } from 'react';
import './style.css'
import {Alert, Form} from 'react-bootstrap';
import AllServices from "./Services";
import {Link, useHistory, useParams} from "react-router-dom";

const Index= () => {

    const [category, setCategory] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const history = useHistory()
    const {id} = useParams()

    const clickSubmit = (event) =>{
        event.preventDefault();
        const data = { category }
        AllServices.create(data)
            .then(response=>{
                setSuccess(response.data.message)
                setError('')
                setCategory('')

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
        history.push('/product/all-category')
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
                <h3 className="page-title"> {id? "Editer": "Ajouter"} une categorie </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/product/all-category'}>
                            <button type="button" className="btn btn-primary btn-fw">
                                <span className="icon-bg "><i className="mdi mdi-arrow-left-bold-circle-outline "></i>Retour</span>
                            </button>
                        </Link>
                    </ol>
                </nav>
            </div>

            <div className="row maintable">
                <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            {
                                showError()
                            }
                            {
                                showSuccess()
                            }
                            <form className="form-inline">
                                <h4 className="card-title px-2">Categorie</h4>
                                <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                                <Form.Control
                                    type="text"
                                    className="form-control mb-2 mr-sm-2"
                                    id="inlineFormInputName2"
                                    placeholder="Ajouter une nouvelle categorie"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary mr-2 btn-fw"
                                    onClick={(event) => clickSubmit(event)}
                                >
                                    {id? 'Editer': 'Envoyer'}
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
