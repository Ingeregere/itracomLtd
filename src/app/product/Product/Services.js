import axios from 'axios'
import {API} from "../../../config";

const PRODUCT_API_URL = `${API}/api/product/`;

class AllServices {
    getAll(){
        return axios.get(PRODUCT_API_URL)
    }

    create(data) {
        return axios.post(PRODUCT_API_URL, data)
    }
    update(data) {
        return axios.put(PRODUCT_API_URL, data)
    }
    getById(id){
        return axios.get(PRODUCT_API_URL +'getProductById/'+id)
    }

    search(id){
        return axios.get(PRODUCT_API_URL +'searchProductByName/'+id)
    }
}

export default new AllServices