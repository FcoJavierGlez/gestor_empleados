import { Schema, model } from 'mongoose';

const EMPLOYEES_SCHEMA = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    position: {
        type: String,
        required: true,
        trim: true
    },
    office: {
        type: String,
        required: true,
        trim: true
    },
    salary: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model( 'Employees', EMPLOYEES_SCHEMA );