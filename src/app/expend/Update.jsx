import React, {useEffect, useState} from 'react';
import '../product/Category/style.css'
import {Alert, Form} from 'react-bootstrap';
import AllServices from "./Services";
import {Link, useHistory, useParams} from "react-router-dom";

const Index= () => {

    const {id} = useParams()
    const [amount, setAmount] = useState('')
    const [expenditure, setExpenditure] = useState('')
    const [description, setDescription] = useState('')
    const [createdAt, setCreatedAt] = useState('')
    const [current,setCurrent] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const history = useHistory()


    const getById = () =>{
        AllServices.getById(id)
            .then( current=>{
                setCurrent(current.data)
            })
            .catch(error =>{
                console.log(id)
                console.log('something went wrong', error)
            })
    }
    const UpdateById = () =>{
        if(id){
            AllServices.getById(id)
                .then(current =>{
                    setExpenditure(current.data.expenditure)
                    setDescription(current.data.description)
                    setAmount(current.data.amount)
                    setCreatedAt(current.data.createdAt)

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
        const data = { amount, description, expenditure, createdAt ,id}
        if(id){
            AllServices.update(data)
                .then(response=>{
                    setSuccess(response.data.message)
                    setError('')
                    setAmount('')
                    setExpenditure('')
                    setDescription('')
                    setCreatedAt('')

                })
                .catch(error =>{
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
        history.push('/expend/all-expend')
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
                <h3 className="page-title">Voulez-vous Editer  <span className={'titleEdite'}>{current.expenditure} </span>?</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/expend/all-expend'}>
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
                                    <label className={'text-dark'} htmlFor="exampleInputUsername1">Dépense</label>
                                    <Form.Control
                                        type="text"
                                        id="exampleInputUsername1"
                                        placeholder="exemple main d'oeuvre"
                                        size="lg"
                                        value={expenditure}
                                        onChange={(e)=>setExpenditure(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="exampleInputUsername1">Montant</label>
                                    <Form.Control
                                        type="number"
                                        id="exampleInputUsername1"
                                        placeholder="Montant"
                                        size="lg"
                                        value={amount}
                                        onChange={(e)=>setAmount(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="exampleInputUsername1">Montant</label>
                                    <Form.Control
                                        type="date"
                                        id="exampleInputUsername1"
                                        placeholder="Montant"
                                        size="lg"
                                        value={createdAt}
                                        onChange={(e)=>setCreatedAt(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label className={'text-dark'} htmlFor="exampleTextarea1">Description</label>
                                    <textarea
                                        value={description}
                                        onChange={(e)=>setDescription(e.target.value)}
                                        placeholder={'Entrez une description....'}
                                        className="form-control"
                                        id="exampleTextarea1"
                                        rows="4">

                                    </textarea>
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
