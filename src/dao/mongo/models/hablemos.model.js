import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const hablemosCollection = 'hablemos';

const hablemosSchema = new mongoose.Schema({
    name: String,
    hablarCon: String,
    mail: String,
    mensaje: String
});

hablemosSchema.plugin(mongoosePaginate);

const hablemosModel = mongoose.model(hablemosCollection, hablemosSchema);

export default hablemosModel;