import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { DefaultLayout } from './layouts/default-layout/default-layout'

@Component({
  selector: 'app-component',
  imports: [RouterOutlet, DefaultLayout],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
