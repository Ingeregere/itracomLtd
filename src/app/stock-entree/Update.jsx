import React, {useEffect, useState} from 'react';
import '../product/Category/style.css'
import {Alert, Form} from 'react-bootstrap';
import AllServices from "./Services";
import SupplierServices from '../suppliers/Services'
import InvoiceServices from '../command/Invoice/Services'
import ProductServices from '../product/Product/Services'
import {Link, useHistory, useParams} from "react-router-dom";

const Index= () => {

    const [createdAt, setCreatedAt] = useState('')
    const [invoice, setInvoice] = useState('')
    const [invoices, setInvoices] = useState([])
    const [product, setProduct] = useState('')
    const [products, setProducts] = useState([])
    const [pu, setPu] = useState('')
    const [quantity, setQuantity] = useState('')
    const [supplier, setSupplier] = useState('')
    const [suppliers, setSuppliers] = useState([])
    const [unit, setUnit] = useState('')
    const [current, setCurrent] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const history = useHistory()
    const {id} = useParams()

    const getAllSuppliers = () =>{
        SupplierServices.getAll().then((response) =>{
            setSuppliers(response.data)
        })
    }
    const  getAllProducts= () =>{
        ProductServices.getAll().then((response) =>{
            setProducts(response.data)
        })
    }
    const  getAllInvoices= () =>{
        InvoiceServices.getAll().then((response) =>{
            setInvoices(response.data)
        })
    }

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
                    setCreatedAt(current.data.createdAt)
                    setProduct(current.data.product)
                    setQuantity(current.data.quantity)
                    setInvoice(current.data.invoice)
                    setUnit(current.data.unit)
                    setPu(current.data.pu)
                    setSupplier(current.data.supplier)
                })
                .catch(error =>{
                    console.log('something went wrong', error)
                })
        }
    }
    useEffect(()=>{
        getById()
        UpdateById()
        getAllSuppliers()
        getAllProducts()
        getAllInvoices()

    },[])

    const clickSubmit = (event) =>{
        event.preventDefault();
        const data = { createdAt, invoice, product, pu, quantity, supplier, unit,id }
        AllServices.update(data)
            .then(response=>{
                setSuccess(response.data.message)
                setError('')
                setCreatedAt('')
                setInvoice('')
                setProduct('')
                setPu('')
                setQuantity('')
                setSupplier('')
                setUnit('')
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
        history.push('/stock-entree/all-stock-entree')
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
                <h3 className="page-title">Voulez-vous Editer  <span className={'titleEdite'}>{current.product} </span>?</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/stock-entree/all-stock-entree'}>
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
                                    <label htmlFor="exampleFormControlSelect3">Product</label>
                                    <select
                                        className="form-control form-control-sm"
                                        id="exampleFormControlSelect3"
                                        value={product}
                                        onChange={(e)=>setProduct(e.target.value)}
                                    >
                                        <option>selectionner le produit.</option>
                                        {products && products.map((current, index) => (
                                            <option key={current.id} value={current.id}>{current.product}</option>
                                        ))}
                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputUsername1">P.u</label>
                                    <Form.Control
                                        type="number"
                                        id="exampleInputUsername1"
                                        placeholder="Prix unitaires"
                                        size="lg"
                                        value={pu}
                                        onChange={(e)=>setPu(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <label htmlFor="exampleInputUsername1">Quantité</label>
                                    <Form.Control
                                        type="text"
                                        id="exampleInputUsername1"
                                        placeholder="Quantité"
                                        size="lg"
                                        value={quantity}
                                        onChange={(e)=>setQuantity(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputEmail1">Unité</label>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="sac,sable,planche,..."
                                        value={unit}
                                        onChange={(e)=>setUnit(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputUsername1">Date</label>
                                    <Form.Control
                                        type="date"
                                        id="exampleInputUsername1"
                                        placeholder="Date"
                                        size="lg"
                                        value={createdAt}
                                        onChange={(e)=>setCreatedAt(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputPassword1">Facture</label>
                                    <select
                                        className="form-control form-control-sm"
                                        id="exampleFormControlSelect3"
                                        value={invoice}
                                        onChange={(e)=>setInvoice(e.target.value)}
                                    >
                                        <option>selectionner facture.</option>
                                        {invoices && invoices.map((current, index) => (
                                            <option key={current.id} value={current.id}>{current.invoice}</option>
                                        ))}
                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputConfirmPassword1">Fournisseur</label>
                                    <select
                                        className="form-control form-control-sm"
                                        id="exampleFormControlSelect3"
                                        value={supplier}
                                        onChange={(e)=>setSupplier(e.target.value)}
                                    >
                                        <option>selectionner le fournisseur.</option>
                                        {suppliers && suppliers.map((current, index) => (
                                            <option key={current.id} value={current.id}>{current.lastName}</option>
                                        ))}
                                    </select>
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
