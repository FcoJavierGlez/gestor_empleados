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
    getEmployeeById: async function (req,res) {
        try {
            const search = await Employees.findById( req.params.id );
            if (!search) return res.status(404).json( { message: 'Employer not found' } );
            res.status(200).json( search );
        } catch (error) {
            res.status(500).json( { message: 'It seems that something went wrong' } );
        }
    },
    addEmployee: async function (req,res) {
        try {
            const employee = new Employees( req.body );
            const added = await employee.save();
            res.status(200).json( added );
        } catch (error) {
            res.status(500).json(  { message: 'It seems that something went wrong' }  );
        }
    },
    updateEmployee: async function (req,res) {
        try {
            const employee = await Employees.findByIdAndUpdate( req.params.id, req.body, { new: true } );
            res.status(200).json( employee );
        } catch (error) {
            res.status(500).json(  { message: 'It seems that something went wrong' }  );
        }
    },
    deleteEmployee: async function (req,res) {
        try {
            const employee = await Employees.findByIdAndDelete( req.params.id );
            res.status(200).json( employee );
        } catch (error) {
            res.status(500).json(  { message: 'It seems that something went wrong' }  );
        }
    },
}

export default employerController;