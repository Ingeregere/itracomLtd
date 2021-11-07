import axios from 'axios'
import {API} from "../../config";

const EXPENDITURE_API_URL = `${API}/api/expenditure/`;

class AllServices {
    getAll(){
        return axios.get( EXPENDITURE_API_URL)
    }

    create(data) {
        return axios.post( EXPENDITURE_API_URL, data)
    }
    update(data) {
        return axios.put( EXPENDITURE_API_URL, data)
    }
    getById(id){
        return axios.get( EXPENDITURE_API_URL +'getExpenditureById/'+id)
    }
    remove(id){
        return axios.delete( EXPENDITURE_API_URL +id)
    }

}

export default new AllServices