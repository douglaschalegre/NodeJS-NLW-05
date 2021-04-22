/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { SettingsController } from './controllers/settingsController'
import { UsersController } from './controllers/usersController'

const routes = Router()

const settingsController = new SettingsController()
const usersController = new UsersController()

routes.post('/settings', settingsController.create)
routes.post('/users', usersController.create)

export { routes }
