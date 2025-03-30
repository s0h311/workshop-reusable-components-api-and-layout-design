import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
