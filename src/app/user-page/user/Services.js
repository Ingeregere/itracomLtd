import axios from 'axios'
import {API} from "../../../config";

const USERPROFIL_API_URL = `${API}/api/user/profile/`;

class AllServices {
    getAll(){
        return axios.get(USERPROFIL_API_URL)
    }

    create(data) {
        return axios.post(USERPROFIL_API_URL, data)
    }

    update(data) {
        return axios.put(USERPROFIL_API_URL, data)
    }

    getById(id){
        return axios.get(USERPROFIL_API_URL +'getUserProfileById/'+id)
    }
    remove(id){
        return axios.delete(USERPROFIL_API_URL +id)
    }
}

export default new AllServices