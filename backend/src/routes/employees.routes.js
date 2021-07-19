import { Router } from "express";
import employerCtrl from '../controllers/employees.controller';

const router = Router();

router.get('/:id', employerCtrl.getEmployeeById );

router.get('/', employerCtrl.getEmployees );

router.post('/', employerCtrl.addEmployee );

router.put('/:id', employerCtrl.updateEmployee );

router.delete('/:id', employerCtrl.deleteEmployee );

export default router;