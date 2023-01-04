import {faker} from '@faker-js/faker';
faker.locale = 'es';

function getUser(id) {
    return {
        id: id,
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        email: faker.internet.email(),
        website: faker.internet.url(),
        image: faker.image.avatar()
    }
}

export {getUser};