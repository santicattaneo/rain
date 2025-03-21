import dotenv from 'dotenv';
import { __mainDirname } from '../utils/utils.js';

dotenv.config({
    path: `${__mainDirname}/.env`
});

export default {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL,
    persistence: process.env.PERSISTENCE
};