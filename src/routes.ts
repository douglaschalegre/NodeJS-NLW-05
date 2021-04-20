import { Router } from 'express'
import { SettingsController } from './controllers/settingsController'

const routes = Router()

const settingsController = new SettingsController()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
routes.post('/settings', settingsController.create)

export { routes }
