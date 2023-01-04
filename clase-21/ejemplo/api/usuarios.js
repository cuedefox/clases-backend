import ContenedorMemoria from "../containers/contenedorMemoria.js";
import {getUser} from '../utils/utils.js';

class ApiUsuariosMock extends ContenedorMemoria {
    constructor() {
        super()
    }
    popular (cant) {
        const nuevos = [];
        for (let i = 0; i < cant; i++) {
            const newUser = getUser();
            const guardado = this.guardar(newUser);
            nuevos.push(guardado);
        }
        return nuevos;
    }
}

export default ApiUsuariosMock;