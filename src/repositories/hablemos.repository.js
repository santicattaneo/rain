export default class HablemosRepository {
    constructor(dao) {
        this.dao = dao;
    };

    get = async() => {
        const forms = await this.dao.get();
        return forms;
    };

    post = async(form) => {
        const response = await this.dao.post(form);
        return response;
    };

    delete = async (hid) => {
        const response = await this.dao.delete(hid);
        return response;
    };
};