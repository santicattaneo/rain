import { Hablemos } from '../dao/factory.js';
import HablemosRepository from '../repositories/hablemos.repository.js';

const hablemosDao = new Hablemos();
const hablemosRepository = new HablemosRepository(hablemosDao);

export default class HalbemosService {
    getForms = async () => {
        const forms = await hablemosRepository.get();
        return forms;
    };

    postForm = async (form) => {
        const result = await hablemosRepository.post(form);
        return result;
    };

    deleteFormById = async (hid) => {
        const result = await hablemosRepository.delete(hid);
        return result;
    };
};