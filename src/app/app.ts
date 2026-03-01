import { Component } from '@angular/core';
import { Background } from './shared/components/background/background';
import { NavigationBar } from "./shared/components/navigation-bar/navigation-bar";

@Component({
  selector: 'app-root',
  imports: [Background, NavigationBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
