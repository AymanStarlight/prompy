import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  imports: [],
  templateUrl: './background.html',
  styleUrl: './background.css',
})
export class Background {
  HORIZENTAL_LINES_NUM = Array(Math.round(window.innerHeight / 80));
  VERTICAL_LINES_NUM = Array(Math.round(window.innerWidth / 80));
}
