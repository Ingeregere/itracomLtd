import axios from 'axios'
import {API} from "../../config";

const SUPPLIERS_API_URL = `${API}/api/supplier/`;

class AllServices {
    getAll(){
        return axios.get(SUPPLIERS_API_URL)
    }

    create(data) {
        return axios.post(SUPPLIERS_API_URL, data)
    }
    update(data) {
        return axios.put(SUPPLIERS_API_URL, data)
    }
    getById(id){
        return axios.get(SUPPLIERS_API_URL +'getSupplierById/'+id)
    }

    search(id){
        return axios.get(SUPPLIERS_API_URL +'searchSupplierByEmail/'+id)
    }
}

export default new AllServices