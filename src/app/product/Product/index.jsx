import React, {useEffect, useState} from 'react';
import '../Category/style.css'
import AllServices from "./Services";
import {Link, useHistory, useParams} from "react-router-dom";



const Index= () => {

    const [products, setProducts] = useState([])
 
    const {id} = useParams()

    useEffect(()=>{
        getAll()

    },[])

    const getAll = () =>{
        AllServices.getAll().then((response) =>{
            setProducts(response.data)
        })
    }

    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title"> Voir tous les produits </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/product/export'}>
                            <button type="button" className="btn btn-warning btn-fw">Export</button>
                        </Link>
                        <Link to={'/product/add-product'}>
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
                                        <th >Nom du categorie</th>
                                        <th >Nom du produit</th>
                                        <th >Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        products.map((product,index) =>(
                                            <tr key={product.id} className={'text-center'}>
                                                <td >{index+1}</td>
                                                <td>{product.category}</td>
                                                <td>{product.product}</td>
                                                <td>
                                                    <Link to={`/product/edit-product/${product.id}`} className={'text-decoration-none'}>
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
