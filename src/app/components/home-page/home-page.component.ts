import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'app-home-page',
   templateUrl: './home-page.component.html',
   styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
   constructor(private route: Router) {}

   ngOnInit() {}

   toCreateAccount(): void {
      this.route.navigate(['account-type']);
   }

   toLogin(): void {
      this.route.navigate(['login']);
   }

   toProfilePage(): void {
      this.route.navigate(['profile']);
   }
}
