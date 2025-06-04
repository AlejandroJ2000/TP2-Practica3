import NumerosModel from "./DAO/model.js";
import NumerosModelFS from "./DAO/modelFS.js";

class Factory {
    static create(persistance) {
        switch(persistance) {
            case "file":
                console.log("File System persistance")
                return new NumerosModelFS()
            case "memory":
                console.log("memory persistance")
                return new NumerosModel()
        
            default:
                console.log("default persistance")
                return new NumerosModel()
        }
    }
}

export default Factory