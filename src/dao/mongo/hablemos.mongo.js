import hablemosModel from "./models/hablemos.model.js";

export default class Hablemos {
    constructor(){};
    
    get = async () => {
        const result = await hablemosModel.find().lean();
        return result;
    };
    
    post = async (body) => {
        const result = await hablemosModel.create(body);
        return result;
    }

    delete = async (hid) => {
        const result = await hablemosModel.deleteOne({ _id: hid });
        return result;
    };
};