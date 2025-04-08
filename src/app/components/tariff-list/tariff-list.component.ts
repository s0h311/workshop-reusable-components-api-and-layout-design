import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'tariff-list-component',
  templateUrl: 'tariff-list.component.html',
  styleUrl: 'tariff-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export default class TariffListComponent {
  public tariffs: {
    id: number
    name: string
    price: number
    type: 'default' | 'disabled' | 'promo'
  }[] = [
    {
      id: 1,
      name: 'Fantastic Tariff',
      price: 12,
      type: 'default',
    },
    {
      id: 2,
      name: 'Crazy Tariff',
      price: 9,
      type: 'promo',
    },
    {
      id: 3,
      name: 'Stupid Tariff',
      price: 32,
      type: 'disabled',
    },
  ]
}
