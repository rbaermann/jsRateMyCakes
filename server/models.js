const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/rateMyCakesdb", { useNewUrlParser : true });

const RateScema = new mongoose.Schema({
    rating : { type : Number, required : [true, "Please provide a rating"] },
    comment : { type : String, required : [true, "Please provide a comment"], minlength : [10, "Please make your comment at least 10 characters"], maxlength : [250, "Please make your comment 250 characters or less"] }
},
{
    timestamps : true
})

const CakeSchema = new mongoose.Schema({
    baker : { type : String, required : [true, "Every cake has a baker"], minlength : [2, "Your name is at least 2 letters, come on"] },
    image : { type : String, required : [true, "You must provide a picture for people to rate it"] },
    rating : [RateScema]
},
{
    timestamps : true
})

const Cake = mongoose.model("Cake", CakeSchema);

module.exports = Cake;
