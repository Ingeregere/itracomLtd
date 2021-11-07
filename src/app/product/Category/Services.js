import axios from 'axios'
import {API} from "../../../config";

const CATEGORY_API_URL = `${API}/api/category/`;

class AllServices {
    getAll(){
        return axios.get(CATEGORY_API_URL)
    }

    create(data) {
        return axios.post(CATEGORY_API_URL, data)
    }
    update(data) {
        return axios.put(CATEGORY_API_URL, data)
    }
    getById(id){
        return axios.get(CATEGORY_API_URL +'getCategoryById/'+id)
    }

    search(id){
        return axios.get(CATEGORY_API_URL +'searchCategoryByName/'+id)
    }
}

export default new AllServices