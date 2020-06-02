const express = require('express');
module.exports = function (Model) {
    // create new express router
    const modelKey = Model.modelName.toLowerCase();
    const router = express.Router();
    const controller = require('./controller');
    const ctrl = controller(Model);
    router.get(`/api/${modelKey}/`, ctrl.getAll);
    router.get(`/api/${modelKey}/:id`, ctrl.getById);
    router.post(`/api/${modelKey}/`, ctrl.create);
    router.delete(`/api/${modelKey}/:id`, ctrl.delete);
    router.put(`/api/${modelKey}/:id`, ctrl.update);
    return router;
}