import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromptBarComponent } from '../../components/prompt-bar/prompt-bar.component';
import { ChatService } from '../../../shared/chat.service';

interface Message {
  text: string;
  from: 'user' | 'ai';
}

@Component({
  standalone: true,
  selector: 'app-chat',
  imports: [CommonModule, PromptBarComponent],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements AfterViewChecked {
  @ViewChild('chatWindow', { static: true })
  private chatWindowRef!: ElementRef<HTMLDivElement>;

  messages: Message[] = [];

  constructor(private chatService: ChatService) {}

  ngAfterViewChecked() {
    // Ensure scrolling happens after view update/render
    setTimeout(() => this.scrollToBottom(), 0);
  }

  onSend(prompt: string) {
    console.log('ChatComponent.onSend got:', prompt);
    this.messages.push({ text: prompt, from: 'user' });

    this.chatService.sendPrompt(prompt).subscribe({
      next: ({ reply }) => {
        console.log('Backend replied:', reply);
        this.messages.push({ text: reply, from: 'ai' });
      },
      error: (err) => {
        console.error('Error from backend:', err);
        this.messages.push({ text: 'Error fetching reply.', from: 'ai' });
      },
    });
  }

  private scrollToBottom() {
    const el = this.chatWindowRef?.nativeElement;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }
}
