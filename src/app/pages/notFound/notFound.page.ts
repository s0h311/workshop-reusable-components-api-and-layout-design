import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'not-found-page',
  templateUrl: './notFound.page.html',
  styleUrl: './notFound.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage {}
