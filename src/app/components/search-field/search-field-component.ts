import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'search-field-component',
  templateUrl: './search-field-component.html',
  styleUrl: './search-field-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
})
export class SearchFieldComponent {
  public items = input.required<string[]>()
  // public items = input<string[]>([]) ==> not this, because the search field may not make any sense without items

  public itemSelect = output<string>()

  public searchQuery = model<string>('')

  public filteredItems = computed<string[]>(() => {
    const items = this.items()
    const searchQuery = this.searchQuery()

    if (!searchQuery) {
      return []
    }

    return items.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
  })

  public handleItemSelect(item: string): void {
    this.itemSelect.emit(item)
    this.searchQuery.set('')
  }
}
