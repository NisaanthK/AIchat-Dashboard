import { Component } from '@angular/core';
import { PromptBarComponent } from '../../components/prompt-bar/prompt-bar.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [PromptBarComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

}
