import axios from 'axios'
import {API} from "../../config";

const STOCK_ENTREE_API_URL = `${API}/api/entreeStocksDaily/`;

class AllServices {
    getAll(){
        return axios.get( STOCK_ENTREE_API_URL +'getAllEntreeStockDaily')
    }

    create(data) {
        return axios.post( STOCK_ENTREE_API_URL+'createEntreeStockDaily/', data)
    }
    update(data) {
        return axios.put( STOCK_ENTREE_API_URL, data)
    }
    getById(id){
        return axios.get( STOCK_ENTREE_API_URL +'getEntreeStockById/'+id)
    }
    remove(id){
        return axios.delete( STOCK_ENTREE_API_URL +id)
    }

}

export default new AllServices