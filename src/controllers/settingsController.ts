import { Request, Response } from 'express'
import { SettingsService } from '../services/settingsService'

class SettingsController {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async create(request: Request, response: Response) {
    const { chat, username } = request.body

    const settingsService = new SettingsService()

    try {
      const settings = await settingsService.create({ chat, username })
      return response.json(settings)
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }
}

export { SettingsController }
