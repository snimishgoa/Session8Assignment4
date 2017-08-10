import { Component } from '@angular/core';
import { UserDataService } from "app/user-data.service";
import { SalutationService } from "app/salutation.service";
import { User } from "app/user.model";
import { LoggerService } from "app/logger.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserDataService, LoggerService]
})
export class AppComponent {
  title = 'Service Demo App';
  hasUsers = false;

  constructor(private _userService: UserDataService, private _salutationService: SalutationService) { }

  addUser(name: string, salutation: string): void {
    if (name) {
      this._userService.addUser(name, salutation);
      this.hasUsers = true;
    }
  }

  getUserList(): User[] {
    return this._userService.getUserList();
  }

  getSalutations(): string[]{
    return this._salutationService.salutations;
  }
}
