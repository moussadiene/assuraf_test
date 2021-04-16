import { Router } from 'express'
import  clientModel  from "../../models/clients";
const router = Router()


/* GET users listing. */
router.get('/clients', function (req, res, next) {
    clientModel.getUsers((err, data) => {
        res.status(200).json(data);
    });
    
})

/* GET user by ID. */
router.get('/clients/:id', function (req, res, next) {
    const id = parseInt(req.params.id)
    if (id >= 0 && id < clients.length) {
        res.json(clients[id])
    } else {
        res.sendStatus(404)
    }
})
router.post('/clients', function (req, res, next) {
   
})
export default router
