import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChatComponent } from './pages/chat/chat.component';
import { DocsComponent } from './pages/docs/docs.component';
import { ImagesComponent } from './pages/images/images.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '' },
];
