import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-error-page",
  templateUrl: "./error-page.component.html",
  styleUrls: ["./error-page.component.css"],
})
export class ErrorPageComponent {
  constructor(private router: Router) {}

  Onclick() {
    setTimeout(() => {
      this.router.navigate(["/home"]);
    }, 2000);
  }
}
