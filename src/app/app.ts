import { Component } from '@angular/core';
import { Background } from './shared/components/background/background';

@Component({
  selector: 'app-root',
  imports: [Background],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
