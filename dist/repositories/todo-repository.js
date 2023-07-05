"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let todos = [];
const dataRepository = {
    getData: () => todos,
    getDataById: (id) => todos.find(el => el.id === id),
    deleteDataById: (id) => {
        const responseData = todos.findIndex(el => el.id === id);
        todos.splice(responseData, 1);
        return responseData;
    },
    postData: (value, isCompleted) => {
        const newData = {
            id: Number(new Date()),
            target: value,
            isCompleted: isCompleted,
            date: new Date(Date.now()).toLocaleString(),
            dateIsCompleted: undefined
        };
        todos.push(newData);
        return newData;
    },
    changeDataById: (id, body) => {
        const currentData = todos.find(el => el.id === id);
        if (currentData) {
            currentData.target = body.target;
            currentData.isCompleted = body.isCompleted;
            if (currentData.isCompleted === true)
                currentData.dateIsCompleted = new Date(Date.now()).toLocaleString();
            else
                currentData.dateIsCompleted = undefined;
        }
        return currentData;
    },
};
exports.default = dataRepository;
