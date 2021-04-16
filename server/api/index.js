import { Router } from 'express'

import clients from './controllers/clients/client'

const router = Router()

// Add USERS Routes
router.use(clients)

export default router