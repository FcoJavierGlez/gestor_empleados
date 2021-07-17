import Employees from '../models/Employees';

const employerController = {
    getEmployees: async function (req,res) {
        try {
            const search = await Employees.find();
            res.status(200).json( search );
        } catch (error) {
            res.status(500).json( { message: 'It seems that something went wrong' } );
        }
    },
    getEmployerById: async function (req,res) {
        try {
            const search = await Employees.findById( req.params.id );
            if (!search) return res.status(404).json( { message: 'Employer not found' } );
            res.status(200).json( [ search ] );
        } catch (error) {
            res.status(500).json( { message: 'It seems that something went wrong' } );
        }
    },
    addEmployer: async function (req,res) {
        try {
            const employer = new Employees( req.body );
            const added = await employer.save();
            res.status(200).json( added );
        } catch (error) {
            res.status(500).json(  { message: 'It seems that something went wrong' }  );
        }
    },
    updateEmployer: async function (req,res) {
        try {
            const employer = await Employees.findByIdAndUpdate( req.params.id, req.body );
            res.status(200).json( employer );
        } catch (error) {
            res.status(500).json(  { message: 'It seems that something went wrong' }  );
        }
    },
    deleteEmployer: async function (req,res) {
        try {
            const employer = await Employees.findByIdAndDelete( req.params.id );
            res.status(200).json( { message: 'Employer deleted' } );
        } catch (error) {
            res.status(500).json(  { message: 'It seems that something went wrong' }  );
        }
    },
}

export default employerController;