import React, {useEffect, useState} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { CSVExport, Search  } from 'react-bootstrap-table2-toolkit';
import AllServices from "./Services";
import '../../product/Category/style.css'
import {Link} from "react-router-dom";

const TablePaginator = () =>{
    const { ExportCSVButton } = CSVExport;
    const { SearchBar } = Search;
    const [values, setValues] = useState([])
    useEffect(()=>{
        getAll()

    },[])

    const getAll = () =>{
        AllServices.getAll().then((response) =>{
            setValues(response.data)
        })
    }
    const columns = [ {
        dataField: 'category',
        text: 'Nom de la categorie',
    }, {
        dataField: 'product',
        text: 'Nom du produit',
    }];


    return (
        <>
            <ToolkitProvider
                keyField="id"
                data={ values }
                columns={ columns }
                exportCSV={ { onlyExportFiltered: true, exportAll: false } }
                search

            >
                {
                    props => (
                        <>
                            <div>

                                <div className="page-header">
                                    <ExportCSVButton { ...props.csvProps } className="btn btn-warning btn-fw">
                                                Export en excel
                                    </ExportCSVButton>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <SearchBar { ...props.searchProps } />
                                        </ol>
                                    </nav>
                                </div>
                                <div className="row">

                                    <div className="col-lg-12 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Bordered table</h4>
                                                <div className="table-responsive">
                                                        <BootstrapTable
                                                            { ...props.baseProps }
                                                            pagination={ paginationFactory()}
                                                        />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </>
                    )
                }
            </ToolkitProvider>
        </>
        )


}
export default TablePaginator