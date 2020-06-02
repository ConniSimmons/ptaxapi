function handleError(res, err) {
    console.log('encountered error... ', err);
    res.json({
        error: err
    });
}
module.exports = function (Model) {
    return {
        create: (req, res, next) => {
            Model.create(req.body, function (err, result) {
                if (err) {
                    handleError(res, err);
                    return;
                }
                res.json({
                    message: `${Model.modelName} created successfully.`,
                    result,
                });
            })
        },
        update: (req, res, next) => {
            const query = {
                _id: req.params.id
            };
            Model.update(query, req.body, (err, result) => {
                if (err) {
                    handleError(res, err);
                    return;
                }
                res.json({
                    message: `${Model.modelName} updated successfully.`,
                    result,
                });
            })
        },
        delete: (req, res, next) => {
            const query = {
                _id: req.params.id
            };
            Model.delete(query, (err, result) => {
                if (err) {
                    handleError(res, err);
                    return;
                }
                res.json({
                    message: `${Model.modelName} deleted successfully.`,
                    result,
                });
            })
        },
        getAll: (req, res, next) => {
            const query = {};
            Model.get(query, (err, result) => {
                if (err) {
                    handleError(res, err);
                    return;
                }
                res.json(result);
            })
        },
        getById: (req, res, next) => {
            const query = {
                _id: req.params.id
            };
            Model.get(query, (err, result) => {
                if (err) {
                    handleError(res, err);
                    return;
                }
                res.json(result);
            })
        },
    }
};