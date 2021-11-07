import axios from 'axios'
import {API} from "../../../config";

const Role_API_URL = `${API}/api/role/`;

class AllServices {
    getAll(){
        return axios.get(Role_API_URL  )
    }

    create(data) {
        return axios.post(Role_API_URL, data)
    }
    Update(data) {
        return axios.put(Role_API_URL, data)
    }
    getById(id){
        return axios.get(Role_API_URL +'getRoleById/'+id)
    }
}

export default new AllServices