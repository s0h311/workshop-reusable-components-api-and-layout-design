import { Routes } from '@angular/router'
import { HomePage } from './pages/home/home.page'
import { NotFoundPage } from './pages/notFound/notFound.page'

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: '**',
    component: NotFoundPage,
  },
]
