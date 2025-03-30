import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from './app/app.config'
import { DefaultLayout } from './app/layouts/default.layout'

bootstrapApplication(DefaultLayout, appConfig).catch((err) => console.error(err))
