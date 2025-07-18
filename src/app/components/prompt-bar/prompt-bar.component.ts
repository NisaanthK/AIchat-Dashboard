import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-prompt-bar',
   standalone: true,
  imports: [],
  templateUrl: './prompt-bar.component.html',
  styleUrls: ['./prompt-bar.component.scss'],
})
export class PromptBarComponent {
  @Output() send = new EventEmitter<string>();

  onSend(value: string) {
    const trimmed = value.trim();
    if (!trimmed) return;
    this.send.emit(trimmed);
    (document.querySelector('textarea') as HTMLTextAreaElement).value = '';
console.log('PromptBar send:', value);

  }

}
