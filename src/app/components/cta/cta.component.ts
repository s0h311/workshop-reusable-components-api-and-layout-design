import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'cta-component',
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaComponent {
  public path = input<string>()
}
