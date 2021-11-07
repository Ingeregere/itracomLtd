import React, {useEffect, useState} from "react"
import AllServices from './Services'
import '../../product/Category/style.css'
import {Alert, Badge, Button, Col, Form, Modal, Row} from "react-bootstrap";
import {Link, useHistory, useParams} from "react-router-dom";

function ModalContact() {
    const {id} = useParams()
    const [invoice, setInvoice] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const [current,setCurrent] = useState('')
    const history = useHistory()

    const getById = () =>{
        AllServices.getById(id)
            .then( current=>{
                setCurrent(current.data)
            })
            .catch(error =>{
                console.log('something went wrong', error)
            })
    }
    const UpdateById = () =>{
        if(id){
            AllServices.getById(id)
                .then(current =>{
                    setInvoice(current.data.invoice)
                })
                .catch(error =>{
                    console.log('something went wrong', error)
                })
        }
    }

    useEffect(() =>{
        UpdateById()
        getById()
    },[])

    const clickSubmit = (event) =>{
        event.preventDefault();
        const data = { invoice, id}
        if(id){
            AllServices.update(data)
                .then(response=>{
                    setSuccess(response.data.message)
                    setError('')
                    setInvoice('')

                })
                .catch(error =>{
                    console.log('something went wrong', error)
                    setError(true)
                    setSuccess('')
                })
        }
    }
    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>Veiller complète tous les champs</center></strong>
        </Alert>
    )
    const SuccessClose = () =>{
        setSuccess('')
        history.push('/command/invoice')
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
                <h3 className="page-title">Voulez-vous Editer  <span className={'titleEdite'}>{current.invoice}</span>?</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">

                        <Link to={'/command/invoice'}>
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
                                <h4 className="card-title px-2">Facture</h4>
                                <label className="sr-only" htmlFor="inlineFormInputName2">Facture</label>
                                <Form.Control
                                    type="text"
                                    className="form-control mb-2 mr-sm-2"
                                    id="inlineFormInputName2"
                                    placeholder="Editer une nouvelle categorie"
                                    value={ invoice }
                                    onChange={(e) => setInvoice(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-primary mr-2 btn-fw"
                                    onClick={(event) => clickSubmit(event)}
                                >
                                    {id? "Editer" : "Ajouter"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalContact