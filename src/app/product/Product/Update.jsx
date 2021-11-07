import React, {useEffect, useState} from 'react';
import {Alert, Form} from 'react-bootstrap';
import AllServices from "./Services";
import '../Category/style.css'
import AllServicesCategories from "../Category/Services";
import {Link, useHistory, useParams} from "react-router-dom";

const Index= () => {

    const [product, setProduct] = useState('')
    const [category, setCategory] = useState('')
    const [current, setCurrent] = useState('')
    const [categories, setCategories] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const history = useHistory()
    const {id} = useParams()

    useEffect(()=>{
        getAll()
        getById()
        UpdateById()

    },[])
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
                    setCategory(current.data.category)
                    setProduct(current.data.product)
                })
                .catch(error =>{
                    console.log('something went wrong', error)
                })
        }
    }

    const getAll = () =>{
        AllServicesCategories.getAll().then((response) =>{
            setCategories(response.data)
        })
    }

    const clickSubmit = (event) =>{
        event.preventDefault();
        const data = { category, product, id }
        if(id){
            AllServices.update(data)
                .then(response=>{
                    setSuccess(response.data.message)
                    setError('')
                    setCategory('')
                    setProduct('')

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
        history.push('/product/all-product')
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
                <h3 className="page-title"> {id? "Editer": "Ajouter"} un nouveau produit </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/product/all-product'}>
                            <button type="button" className="btn btn-primary btn-fw">
                                <span className="icon-bg "><i className="mdi mdi-arrow-left-bold-circle-outline "></i>Retour</span>
                            </button>
                        </Link>
                    </ol>
                </nav>
            </div>

            <div className="row maintable">
                <div className="col-3"></div>
                <div className="col-6 grid-margin stretch-card">

                    <div className="card">

                        <div className="card-body">
                            {
                                showError()
                            }
                            {
                                showSuccess()
                            }
                            <form >
                                <h4 className="card-title px-2">Nouveau produit</h4>
                                <Form.Group>
                                    <label className="text-dark"  htmlFor="exampleFormControlSelect2">Choisissez la categorie</label>
                                    <select
                                        className="form-control"
                                        id="exampleFormControlSelect2"
                                        value={category}
                                        onChange={(e)=>setCategory(e.target.value)}
                                    >
                                        <option>selectionner la categorie...</option>
                                        {categories && categories.map(category => (
                                            <option key={category.id} value={category.id}>{category.category}</option>
                                        ))}
                                    </select>
                                </Form.Group>

                                <Form.Group>
                                    <label className="text-dark" >Nom du produit</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control-lg"
                                        placeholder="Username"
                                        aria-label="Username"
                                        value={product}
                                        onChange={(e)=> setProduct(e.target.value)}
                                    />
                                </Form.Group>
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
