import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/product', state: 'productMenuOpen'},
      {path:'/advanced-ui', state: 'advancedUiMenuOpen'},
      {path:'/command', state: 'commandMenuOpen'},
      {path:'/stock-entree', state: 'entréesMenuOpen'},
      {path:'/dépenses', state: 'dépensesMenuOpen'},
      {path:'/sorties', state: 'sortiesMenuOpen'},
      {path:'/maps', state: 'mapsMenuOpen'},
      {path:'/suppliers', state: 'suppliersMenuOpen'},
      {path:'/expend', state: 'expendMenuOpen'},
      {path:'/connexion', state: 'userPagesMenuOpen'},
      {path:'/user-page', state: 'errorPagesMenuOpen'},
      {path:'/general-pages', state: 'generalPagesMenuOpen'},
      {path:'/ecommerce', state: 'ecommercePagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));

  }
  render () {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item nav-category"><Trans>Administrateur</Trans></li>
            <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
              <Link className="nav-link" to="/product/all-product">
                <span className="icon-bg"><i className="mdi mdi-cube menu-icon"></i></span>
                <span className="menu-title"><Trans>Tableaau de bord</Trans></span>
              </Link>
            </li>
            <li className="nav-item nav-category"><Trans>Tous les menus</Trans></li>
            <li className={ this.isPathActive('/product') ? 'nav-item active' : 'nav-item' }>
              <div className={ this.state.productMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('productMenuOpen') } data-toggle="collapse">
                <span className="icon-bg"><i className="mdi mdi-crosshairs-gps menu-icon"></i></span>
                <span className="menu-title"><Trans>Produit</Trans></span>
                <i className="menu-arrow"></i>
              </div>
              <Collapse in={ this.state.productMenuOpen }>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/product/category') ? 'nav-link active' : 'nav-link' } to="/product/all-category"><Trans>Gérer Categories</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/product/all-product') ? 'nav-link active' : 'nav-link' } to="/product/all-product"><Trans>Gérer les produit</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/product/export') ? 'nav-link active' : 'nav-link' } to="/product/export"><Trans>Export les produits</Trans></Link></li>
                </ul>
              </Collapse>
            </li>
            <li className={ this.isPathActive('/suppliers') ? 'nav-item active' : 'nav-item' }>
              <div className={ this.state.suppliersMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('suppliersMenuOpen') } data-toggle="collapse">
                <span className="icon-bg"><i className="mdi mdi-contacts menu-icon"></i></span>
                <span className="menu-title"><Trans>Les fournisseurs</Trans></span>
                <i className="menu-arrow"></i>
              </div>
              <Collapse in={ this.state.suppliersMenuOpen }>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/suppliers/all-suppliers') ? 'nav-link active' : 'nav-link' } to="/suppliers/all-suppliers"><Trans>Gérer les fournisseurs</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/suppliers/export') ? 'nav-link active' : 'nav-link' } to="/suppliers/export"><Trans>Export les fournisseurs</Trans></Link></li>
                </ul>
              </Collapse>
            </li>
            <li className={ this.isPathActive('/command') ? 'nav-item active' : 'nav-item' }>
              <div className={ this.state.commandMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('commandMenuOpen') } data-toggle="collapse">
                <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
                <span className="menu-title"><Trans>Les commandes</Trans></span>
                <i className="menu-arrow"></i>
              </div>
              <Collapse in={ this.state.commandMenuOpen }>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/command/invoice') ? 'nav-link active' : 'nav-link' } to="/command/invoice"><Trans>Les Factures</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/command/all-command') ? 'nav-link active' : 'nav-link' } to="/command/all-command"><Trans>Gérer les commande</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/command/export') ? 'nav-link active' : 'nav-link' } to="/command/export"><Trans>Export commandes</Trans></Link></li>
                </ul>
              </Collapse>
            </li>
            <li className="nav-item nav-category"><Trans>Les entrées et sorties</Trans></li>
            <li className={ this.isPathActive('/dépenses') ? 'nav-item active' : 'nav-item' }>
              <div className={ this.state.dépensesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('dépensesMenuOpen') } data-toggle="collapse">
                <span className="icon-bg"><i className="mdi mdi-chart-bar menu-icon"></i></span>
                <span className="menu-title"><Trans>Les dépenses</Trans></span>
                <i className="menu-arrow"></i>
              </div>
              <Collapse in={ this.state.dépensesMenuOpen }>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/expend/all-expend') ? 'nav-link active' : 'nav-link' } to="/expend/all-expend"><Trans>Gérer les dépenses</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/expend/export') ? 'nav-link active' : 'nav-link' } to="/expend/export"><Trans>Export les dépenses</Trans></Link></li>
                </ul>
              </Collapse>
            </li>
            <li className={ this.isPathActive('/stock-entree') ? 'nav-item active' : 'nav-item' }>
              <div className={ this.state.entréesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('entréesMenuOpen') } data-toggle="collapse">
                <span className="icon-bg"><i className="mdi mdi-table-large menu-icon"></i></span>
                <span className="menu-title"><Trans>Entrée stock</Trans></span>
                <i className="menu-arrow"></i>
              </div>
              <Collapse in={ this.state.entréesMenuOpen }>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-entree/all-stock-entree') ? 'nav-link active' : 'nav-link' } to="/stock-entree/all-stock-entree"><Trans>Créer stock entrée </Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-entree/export') ? 'nav-link active' : 'nav-link' } to="/stock-entree/export"><Trans>Export stock entrée </Trans></Link></li>
                </ul>
              </Collapse>
            </li>
            <li className={ this.isPathActive('/stock-out') ? 'nav-item active' : 'nav-item' }>
              <div className={ this.state.sortiesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('sortiesMenuOpen') } data-toggle="collapse">
                <span className="icon-bg"><i className="mdi mdi-table-large menu-icon"></i></span>
                <span className="menu-title"><Trans>Sortie stock</Trans></span>
                <i className="menu-arrow"></i>
              </div>
              <Collapse in={ this.state.sortiesMenuOpen }>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-out/all-stock-out') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Créer stock sortie </Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-out/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Enregistrer pls. stock sortie </Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-out/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Sorties total</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-out/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>le stock sortie/jr</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-out/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Gérer le stock sortie</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-out/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>somme du stock sortie/jr</Trans></Link></li>
                </ul>
              </Collapse>
            </li>
            <li className={ this.isPathActive('/rapports') ? 'nav-item active' : 'nav-item' }>
              <div className={ this.state.rapportsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('rapportsMenuOpen') } data-toggle="collapse">
                <span className="icon-bg"><i className="mdi mdi-table-large menu-icon"></i></span>
                <span className="menu-title"><Trans>Rapport</Trans></span>
                <i className="menu-arrow"></i>
              </div>
              <Collapse in={ this.state.rapportsMenuOpen }>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-entree/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Gérer tous Entr/categorie </Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-entree/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Gérer Entr.stock/jr </Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-entree/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Gérer Entr.stock/facture</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-entree/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Gérer Entr.stock/Fourn</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-entree/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Gérer tous les commandes</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-entree/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Gérer Entr.stock/jr</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-entree/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>somme Gérer Entr.stock/jr</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-entree/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>somme Gérer Entr.stock/Facture</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-entree/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>somme Gérer Entr.stock/Fourn</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/stock-entree/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>somme Gérer Entr.stock/categorie</Trans></Link></li>
                </ul>
              </Collapse>
            </li>
            <li className="nav-item nav-category">Sample Pages</li>
            <li className={ this.isPathActive('/connexion') ? 'nav-item active' : 'nav-item' }>
              <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">
                <span className="icon-bg"><i className="mdi mdi-lock menu-icon"></i></span>
                <span className="menu-title"><Trans>User pages</Trans></span>
                <i className="menu-arrow"></i>
              </div>
              <Collapse in={ this.state.userPagesMenuOpen }>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/connexion/connect') ? 'nav-link active' : 'nav-link' } to="/connexion/connect"><Trans>Login</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/connexion/register-1') ? 'nav-link active' : 'nav-link' } to="/connexion/register-1"><Trans>Register</Trans></Link></li>
                </ul>
              </Collapse>
            </li>
            <li className={ this.isPathActive('/user-page') ? 'nav-item active' : 'nav-item' }>
              <div className={ this.state.errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('errorPagesMenuOpen') } data-toggle="collapse">
                <span className="icon-bg"><i className="mdi mdi-security menu-icon"></i></span>
                <span className="menu-title"><Trans>Utilisateur</Trans></span>
                <i className="menu-arrow"></i>
              </div>
              <Collapse in={ this.state.errorPagesMenuOpen }>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/user-page/all-role') ? 'nav-link active' : 'nav-link' } to="/user-page/all-role"><Trans>Gérer role</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/user-page/all-user') ? 'nav-link active' : 'nav-link' } to="/user-page/all-user"><Trans>Créer un utilisateur</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/user-page/error-500') ? 'nav-link active' : 'nav-link' } to="/user-page/error-500"><Trans>Gérer les utilisateurs</Trans></Link></li>
                </ul>
              </Collapse>
            </li>

            <li className="nav-item sidebar-user-actions">
              <div className="sidebar-user-menu">
                <a href="!#" onClick={event => event.preventDefault()} className="nav-link"><i className="mdi mdi-logout menu-icon"></i>
                  <span className="menu-title"><Trans>Déconnecter</Trans></span></a>
              </div>
            </li>
          </ul>
        </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {

      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);