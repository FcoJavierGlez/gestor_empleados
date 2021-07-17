import { config } from "dotenv";
config();

const OPT_CONFIG = {
    db_conn: process.env.DB_URI || 'mongodb://localhost:27017/employees',
}

export default OPT_CONFIG;