"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = list;
exports.getById = getById;
exports.create = create;
exports.update = update;
exports.remove = remove;
const datdabase_service_1 = require("../datdabase.service");
async function list() {
    return datdabase_service_1.db.pet.findMany();
}
async function getById(id) {
    return datdabase_service_1.db.pet.findUnique({
        where: { id },
    });
}
async function create(input) {
    return datdabase_service_1.db.pet.create({
        data: input,
    });
}
async function update(id, input) {
    return datdabase_service_1.db.pet.update({
        where: { id },
        data: input,
    });
}
async function remove(id) {
    await datdabase_service_1.db.pet.delete({
        where: { id },
    });
    return true;
}
//# sourceMappingURL=pets.service.js.map