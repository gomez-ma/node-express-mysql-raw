const Tutorial = require("../model/tutorial.model.js");

exports.create = (req, res) => {
    res.send({message: "Create"});
};

exports.findAll = (req, res) => {
    const title = req.query.title;

    Tutorial.getAll(title, (err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        }else{
            res.send(data);
        }
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    res.send({message: "FindOne : " + id});
};

exports.findAllPublished = (req, res) => {
    res.send({message: "findAllPublished"});
};
exports.update = (req, res) => {
    res.send({message: "update"});
};

exports.delete = (req, res) => {
    res.send({message: "delete"});
};

exports.deleteAll = (req, res) => {
    res.send({message: "deleteAll"});
};