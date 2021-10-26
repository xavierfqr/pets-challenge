import http from "../http";

class PetDataService {
    getAll(){
        return http.get("/pets");
    }
}

export default new PetDataService();