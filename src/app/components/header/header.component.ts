import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   constructor(private route: Router) {}

   ngOnInit() {}

   toCreateAccount() {
      this.route.navigate(['account-type']);
   }

   toHomePage() {
      this.route.navigate(['home']);
   }

   toProfilePage() {
      this.route.navigate(['profile']);
   }

   toMarkertPage() {
      this.route.navigate(['market']);
   }

   toTutorialsPage() {
      this.route.navigate(['tutorials']);
   }

   toLoginPage() {
      this.route.navigate(['login']);
   }

   toAdminPage() {
      this.route.navigate(['admin']);
   }
}
