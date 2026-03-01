import { Component } from "@angular/core";
import { CirclePlus, CircleUserRound, LucideAngularModule } from "lucide-angular";

@Component({
  selector: "app-navigation-bar",
  imports: [LucideAngularModule],
  templateUrl: "./navigation-bar.html",
  styleUrl: "./navigation-bar.css",
})
export class NavigationBar {
  readonly CirclePlus = CirclePlus;
  readonly CircleUserRound = CircleUserRound;
}
