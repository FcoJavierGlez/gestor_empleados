import { Router } from "express";
import employerCtrl from '../controllers/employees.controller';

const router = Router();

router.get('/:id', employerCtrl.getEmployerById );

router.get('/', employerCtrl.getEmployees );

router.post('/', employerCtrl.addEmployer );

router.put('/:id', employerCtrl.updateEmployer );

router.delete('/:id', employerCtrl.deleteEmployer );

export default router;