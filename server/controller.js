const Cake = require("./models");

module.exports = {
    Index : (req, res) => {
        Cake.find()
            .then(data => res.json({ Cake : data }))
            .catch(err => res.json(err))
    },
    SingleCake : (req, res) => {
        Cake.findOne({ _id : req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    CreateCake : (req, res) => {
        Cake.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    UpdateCake : (req, res) => {
        Cake.updateOne({ _id : req.params.id }, req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    DeleteCake : (req, res) => {
        Cake.remove({ _id : req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    CreateRating : (req, res) => {
        Cake.updateOne({ _id : req.params.id }, {
            $push: { rating : { rating : req.body.rating, comment : req.body.comment } }
        })
            .then((data) => {
                console.log(data)
                return res.json(data);
            })
            .catch((err) => {
                console.log(err)
                return res.json(err);
            })
    }
}