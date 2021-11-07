import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
{/* Start category*/}
const AllCategory = lazy(() => import('./product/Category'));
const AddCategory = lazy(() => import('./product/Category/Add'));
const UpdateCategory = lazy(() => import('./product/Category/Update'));
{/* End category*/}

{/* Start product*/}
const AllProduct = lazy(() => import('./product/Product'));
const AddProduct= lazy(() => import('./product/Product/Add'));
const UpdateProduct = lazy(() => import('./product/Product/Update'));
const ExportProduct = lazy(() => import('./product/Product/Export'));
{/* End product*/}

{/*Start suppliers*/}
const AllSuppliers = lazy(() => import('./suppliers'));
const AddSuppliers = lazy(() => import('./suppliers/Add'));
const UpdateSuppliers = lazy(() => import('./suppliers/Update'));
const ExportSuppliers = lazy(() => import('./suppliers/Export'));
{/*End suppliers*/}

{/*Start Invoice*/}
const AllInvoice = lazy(() => import('./command/Invoice'));
const AddCommandInvoice = lazy(() => import('./command/Invoice/Add'));
const UpdateCommandInvoice = lazy(() => import('./command/Invoice/Update'));
{/*End Invoice*/}
{/* Start Command*/}
const AllCommand = lazy(() => import('./command/Command'));
const AddCommand = lazy(() => import('./command/Command/Add'));
const DeleteCommand = lazy(() => import('./command/Command/Delete'));
const UpdateCommand = lazy(() => import('./command/Command/Update'));
const ExportCommand = lazy(() => import('./command/Command/Export'));
{/* End Command*/}

{/*Start expend*/}
const AllExpend = lazy(() => import('./expend'));
const AddExpend = lazy(() => import('./expend/Add'));
const UpdateExpend = lazy(() => import('./expend/Update'));
const DeleteExpend = lazy(() => import('./expend/Delete'));
const ExportExpend = lazy(() => import('./expend/Export'));
{/*End expend*/}

{/* Start Stock-entree*/}
const AllStockEntree = lazy(() => import('./stock-entree'));
const AddStockEntree = lazy(() => import('./stock-entree/Add'));
const UpdateStockEntree = lazy(() => import('./stock-entree/Update'));
const DeleteStockEntree = lazy(() => import('./stock-entree/Delete'));
const ExportStockEntree = lazy(() => import('./stock-entree/Export'));
{/* End Stock-entree*/}

{/*Start Role*/}
const AllRole = lazy(() => import('./user-page/role'));
const AddRole = lazy(() => import('./user-page/role/Add'));
const UpdateRole = lazy(() => import('./user-page/role/Update'));
{/*End Role*/}

{/*Start User*/}
const AllUser = lazy(() => import('./user-page/user'));
const AddUser = lazy(() => import('./user-page/user/Add'));
const UpdateUser = lazy(() => import('./user-page/user/Update'));
const DeleteUser = lazy(() => import('./user-page/user/Delete'));
{/*End User*/}

const BasicElements = lazy(() => import('./command/BasicElements'));

const Login = lazy(() => import('./connexion/Login'));
const Register1 = lazy(() => import('./connexion/Register'));


class AppRoutes extends Component {
  render () {
    return (
        <Suspense fallback={<Spinner/>}>
          <Switch>
            <Route exact path="/dashboard" component={ Dashboard } />
            {/* Start  category routes*/}
            <Route path="/product/all-category" component={ AllCategory } />
            <Route path="/product/add-category" component={ AddCategory } />
            <Route path="/product/edit-category/:id" component={ UpdateCategory } />
            {/* End category routes*/}

            {/* Start  product routes*/}
            <Route path="/product/all-product" component={ AllProduct } />
            <Route path="/product/add-product" component={ AddProduct } />
            <Route path="/product/edit-product/:id" component={ UpdateProduct } />
            <Route path="/product/export" component={ ExportProduct } />
            {/* End product routes*/}

            {/*Start Suppliers*/}
            <Route path="/suppliers/all-suppliers" component={ AllSuppliers } />
            <Route path="/suppliers/add-supplier" component={ AddSuppliers } />
            <Route path="/suppliers/edit-supplier/:id" component={ UpdateSuppliers } />
            <Route path="/suppliers/export" component={ ExportSuppliers } />
            {/*End Suppliers*/}

            {/* Start Invoice*/}
            <Route path="/form-Elements/basic-elements" component={ BasicElements } />
            <Route path="/command/invoice" component={ AllInvoice } />
            <Route path="/command/add-invoice" component={ AddCommandInvoice } />
            <Route path="/command/edit-invoice/:id" component={ UpdateCommandInvoice } />
            {/* End Invoice*/}

            {/* Start Command */}
            <Route path="/command/all-command" component={ AllCommand } />
            <Route path="/command/add-command" component={ AddCommand } />
            <Route path="/command/edit-command/:id" component={ UpdateCommand } />
            <Route path="/command/delete-command/:id" component={ DeleteCommand } />
            <Route path="/command/export" component={ ExportCommand } />
            {/* End Command */}
            {/*Start Expend */}
            <Route path="/expend/all-expend" component={ AllExpend } />
            <Route path="/expend/add-expend" component={ AddExpend } />
            <Route path="/expend/edit-expend/:id" component={ UpdateExpend } />
            <Route path="/expend/delete-expend/:id" component={ DeleteExpend } />
            <Route path="/expend/export" component={ ExportExpend } />

            {/*End Expend */}
            {/*Start Stock-entree*/}
            <Route path="/stock-entree/all-stock-entree" component={ AllStockEntree } />
            <Route path="/stock-entree/add-stock-entree" component={ AddStockEntree } />
            <Route path="/stock-entree/edit-stock-entree/:id" component={ UpdateStockEntree } />
            <Route path="/stock-entree/delete-stock-entree/:id" component={ DeleteStockEntree } />
            <Route path="/stock-entree/export" component={ ExportStockEntree } />
            {/*End Stock-entree*/}

            {/*Start Role*/}
            <Route path="/user-page/all-role" component={ AllRole } />
            <Route path="/user-page/add-role" component={ AddRole } />
            <Route path="/user-page/edit-role/:id" component={ UpdateRole } />
            {/*End Role*/}

            {/*Start user*/}
            <Route path="/user-page/all-user" component={ AllUser } />
            <Route path="/user-page/add-user" component={ AddUser } />
            <Route path="/user-page/edit-user/:id" component={ UpdateUser } />
            <Route path="/user-page/delete-user/:id" component={ DeleteUser} />
            {/*End user*/}

            <Route path="/connexion/connect" component={ Login } />
            <Route path="/connexion/register-1" component={ Register1 } />
            <Redirect to="/product/all-product" />
          </Switch>
        </Suspense>
    );
  }
}

export default AppRoutes;