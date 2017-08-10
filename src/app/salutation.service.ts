import { Injectable } from '@angular/core';

@Injectable()
export class SalutationService {
  private _salutations: string[] = ["Mr", "Ms", "Mrs"]
  
  public get salutations() : string[] {
    return this._salutations;
  }
  
  constructor() { }

}
