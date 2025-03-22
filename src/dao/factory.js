import env from '../config/config.js';

const persistence = env.persistence;

export let Hablemos;

switch(persistence) {
    case 'MONGO':
        const mongoose = await import('mongoose');
        await mongoose.connect(env.mongoUrl);

        const { default: HablemosMongo } = await import('./mongo/hablemos.mongo.js');

        Hablemos = HablemosMongo;

        break;
    case 'FILES':
        break;
};