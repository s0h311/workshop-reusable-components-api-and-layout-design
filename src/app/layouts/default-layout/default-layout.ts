import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'default-layout',
  templateUrl: './default-layout.html',
  styleUrl: './default-layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayout {}
