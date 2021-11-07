import React, {useEffect, useState} from 'react';
import '../../product/Category/style.css'
import {Alert, Form} from 'react-bootstrap';
import AllServices from "./Services";
import InvoiceServices from '../Invoice/Services'
import ProductServices from '../../product/Product/Services'
import SupplierServices from '../../suppliers/Services'
import {Link, useHistory, useParams} from "react-router-dom";

const Index= () => {

    const [createdAt, setCreatedAt] = useState('')
    const [invoices, setInvoices] = useState([])
    const [invoice, setInvoice] = useState('')
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState('')
    const [suppliers, setSuppliers] = useState([])
    const [supplier, setSupplier] = useState('')
    const [pu, setPu] = useState('')
    const [quantity, setQuantity] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')
    const history = useHistory()
    const {id} = useParams()


    useEffect(()=>{
        getAllInvoice()
        getAllProduct()
        getAllSupplier()

    },[])

    const getAllInvoice = () =>{
        InvoiceServices.getAll().then((response) =>{
            setInvoices(response.data)
        })
    }
    const getAllProduct = () =>{
        ProductServices.getAll().then((response) =>{
            setProducts(response.data)
        })
    }
    const getAllSupplier = () =>{
        SupplierServices.getAll().then((response) =>{
            setSuppliers(response.data)
        })
    }



    const clickSubmit = (event) =>{
        event.preventDefault();
        const data = { createdAt, invoice, product, pu, quantity, supplier }
        AllServices.create(data)
            .then(response=>{
                setSuccess(response.data.message)
                setError('')
                setCreatedAt('')
                setInvoice('')
                setProduct('')
                setPu('')
                setQuantity('')
                setSupplier('')

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
        history.push('/command/all-command')
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
                <h3 className="page-title"> {id? "Editer": "Ajouter"} une commande </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/command/all-command'}>
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
                                    <label htmlFor="exampleFormControlSelect1">Nom du produit</label>
                                    <select
                                        className="form-control form-control-lg"
                                        id="exampleFormControlSelect1"
                                        value={product}
                                        onChange={(e)=>setProduct(e.target.value)}
                                    >
                                        <option>selectionner le produit ...</option>

                                            {products && products.map((current, index) => (
                                                <option key={current.id} value={current.id}>{current.product}</option>
                                            ))}

                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputUsername1">P.U</label>
                                    <Form.Control
                                        type="tel"
                                        id="exampleInputUsername1"
                                        placeholder="prix unitaire"
                                        size="lg"
                                        value={pu}
                                        onChange={(e)=>setPu(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputUsername1">Quantité</label>
                                    <Form.Control
                                        type="number"
                                        id="exampleInputUsername1"
                                        placeholder="Quantité"
                                        size="lg"
                                        value={quantity}
                                        onChange={(e)=>setQuantity(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputEmail1">Facture</label>
                                    <select
                                        className="form-control form-control-lg"
                                        id="exampleFormControlSelect1"
                                        value={invoice}
                                        onChange={(e)=>setInvoice(e.target.value)}
                                    >
                                        <option>selectionner la facture ...</option>

                                        {invoices && invoices.map((current, index) => (
                                            <option key={current.id} value={current.id}>{current.invoice}</option>
                                        ))}

                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputConfirmPassword1">Fournisseur</label>
                                    <select
                                        className="form-control form-control-lg"
                                        id="exampleFormControlSelect1"
                                        value={supplier}
                                        onChange={(e)=>setSupplier(e.target.value)}

                                    >
                                        <option>selectionner le fourniseur ...</option>

                                        {suppliers && suppliers.map((current, index) => (
                                            <option key={current.id} value={current.id}>{current.lastName}</option>
                                        ))}

                                    </select>
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="exampleInputPassword1">Date</label>
                                    <Form.Control
                                        type="date"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Mobile"
                                        value={createdAt}
                                        onChange={(e)=>setCreatedAt(e.target.value)}
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
