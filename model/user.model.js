let listUser = require('../data/user.json');
const fs = require('fs');
const USER_FILE = './data/user.json';
let currentID = listUser.length > 0 ? Math.max(...listUser.map(user => user.id)) : 0;

const save = () => {
    fs.writeFileSync(USER_FILE, JSON.stringify(listUser));
}

const getAll = () => {
    return listUser;
}

const getById = (id) => {
    return listUser.find(user => user.id === parseInt(id));
}

const create = (user) => {
    let newUser = {id: ++currentID};
    if (user.email) {
        newUser.email = user.email;
    }
    if (user.password) {
        newUser.password = user.password;
    }
    listUser.push(newUser);
    save();
}

const update = (id, user) => {
    let userToUpdate = listUser.find(user => user.id === parseInt(id));
    if (!userToUpdate) {
        return false;
    }
    if (user.email) {
        userToUpdate.email = user.email;
    }
    if (user.password) {
        userToUpdate.password = user.password;
    }
    save();
}

const remove = (id) => {
    listUser = listUser.filter(user => user.id !== id);
    save();
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}