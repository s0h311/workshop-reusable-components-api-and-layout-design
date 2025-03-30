import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'default-layout',
  imports: [RouterOutlet],
  templateUrl: './default.layout.html',
  styleUrl: './default.layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayout {}
