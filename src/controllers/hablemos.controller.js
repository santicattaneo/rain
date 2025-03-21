import HablemosServices from '../services/hablemos.service.js';

export default class HablemosController {
    constructor () {
        this.hablemosServices = new HablemosServices();
    };
    
    getForms = async (req, res) => {
        try {
            const forms = await this.hablemosServices.getForms();
            res.send({ status: 'success', payload: forms });
        } catch (error) {
            res.status(500).render('error', { title: 'oops :(' });
        }
    };

    postForm = async (req, res) => {
        try {
            const { name, hablarCon, mail, mensaje } = req.body;
            const form = {
                name: name,
                hablarCon: hablarCon,
                mail: mail,
                mensaje: mensaje
            };
            await this.hablemosServices.postForm(form);
            res.status(201).send({  status: 'success', message: 'message sended' });
        } catch (error) {
            res.status(500).render('error', { title: 'oops :(' });
        };
    };

    deleteFormById = async (req, res) => {
        try {
            const { hid } = req.params;
            await this.hablemosServices.deleteFormById(hid);
            res.send({ status: 'success', message: 'form deleted' });
        } catch (error) {
            res.status(500).render('error', { title: 'oops :(' });
        }
    }
};