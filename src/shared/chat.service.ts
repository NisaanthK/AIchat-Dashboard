import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ChatResponse { reply: string; }

@Injectable({ providedIn: 'root' })
export class ChatService {
  private apiUrl = 'http://localhost:4000/api/chat';

  constructor(private http: HttpClient) {}

  sendPrompt(prompt: string): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(this.apiUrl, { prompt });
  }
}
