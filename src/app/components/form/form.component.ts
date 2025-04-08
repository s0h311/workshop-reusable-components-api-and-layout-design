import { ChangeDetectionStrategy, Component, signal } from '@angular/core'

@Component({
  selector: 'form-component',
  template: `
    <form (submit)="handleSubmit($event)">
      <input
        name="email"
        type="email"
        placeholder="harry@potter.de"
      />
      <button type="submit">submit</button>

      @if (errorMessage()) {
        <div>{{ errorMessage() }}</div>
      }
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FormComponent {
  private alreadySubmittedSuccessfully = signal<boolean>(false)
  public errorMessage = signal<string | null>(null)

  public handleSubmit(event: SubmitEvent): void {
    event.preventDefault()

    if (this.alreadySubmittedSuccessfully()) {
      this.errorMessage.set('You can only submit this once.')
      return
    }

    const formElement = event.target as HTMLFormElement
    const formData = new FormData(formElement)

    fetch('/someEndpoint', {
      method: 'POST',
      body: formData,
    }).then(() => this.alreadySubmittedSuccessfully.set(true))
  }
}
