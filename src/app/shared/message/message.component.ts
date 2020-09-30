import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div class="ui-messages ui-messages-error" *ngIf="temError()">
      {{text}}
     </div>
  `,
  styles: [`.ui-message-error {
    margin: 0;
    margin-top: 4px
  }`]
})
export class MessageComponent {

  @Input()
  error: string;
  @Input()
  control: FormControl;
  @Input()
  text: string;

  temError(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }
}
