import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CtaComponent } from '../cta/cta.component'

@Component({
  selector: 'tariff-box-component',
  templateUrl: './tariff-box.component.html',
  styleUrl: './tariff-box.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CtaComponent],
})
export class TariffBoxComponent {
  public tariffs: {
    id: number
    name: string
    onlineSubscriptionPath?: string
  }[] = [
    {
      id: 1,
      name: 'Fantastic Tariff',
      onlineSubscriptionPath: '/online/subscribe/1',
    },
    {
      id: 2,
      name: 'Crazy Tariff',
    },
  ]
}
