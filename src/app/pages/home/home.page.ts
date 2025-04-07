import { ChangeDetectionStrategy, Component } from '@angular/core'
import { TariffBoxComponent } from '../../components/tariff-box/tariff-box.component'
import { SearchFieldComponent } from '../../components/search-field/search-field-component'

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TariffBoxComponent, SearchFieldComponent],
})
export class HomePage {
  public items = [
    'Harry Potter',
    'Ron Weasley',
    'Hermine Granger',
    'Draco Malfoy',
    'Snape',
    'Dumbledore',
    'Gryffindor',
    'Slytherin',
  ]

  public handleItemSelect(item: string): void {
    console.log('SELECTED ITEM', item)
  }
}
