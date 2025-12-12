"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getById = exports.list = void 0;
const datdabase_service_1 = require("../datdabase.service");
const list = () => datdabase_service_1.db.user.findMany();
exports.list = list;
const getById = (id) => datdabase_service_1.db.user.findUnique({ where: { id } });
exports.getById = getById;
const create = (data) => datdabase_service_1.db.user.create({ data });
exports.create = create;
const update = (id, data) => datdabase_service_1.db.user.update({ where: { id }, data });
exports.update = update;
const remove = (id) => datdabase_service_1.db.user.delete({ where: { id } });
exports.remove = remove;
//# sourceMappingURL=users.service.js.map