import { Injectable } from '@angular/core';
import { User } from "app/user.model";
import { LoggerService } from "app/logger.service";

@Injectable()
export class UserDataService {
  private userList: User[] = new Array();

  constructor(private logger: LoggerService) { }

  addUser(name: string, salutation: string): void{
    this.logger.info('Adding data');
    let user = {salutation: salutation, name: name};
    this.userList.unshift(user);
  }

  getUserList(): User[]{
    this.logger.info('Retrieving data');
    return this.userList;
  }
}
