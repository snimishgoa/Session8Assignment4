import { Injectable } from '@angular/core';
import { LogLevel } from "app/log-level";

@Injectable()
export class LoggerService {
  private level: LogLevel;  

  constructor() { }

  log(msg: String, level: LogLevel): void{
    switch(level){
      case LogLevel.Fatal:{
        this.fatal(msg);
        break;
      }
      case LogLevel.Error:{
        this.error(msg);
        break;
      }
      case LogLevel.Warn:{
        this.warn(msg);
        break;
      }
      default:{
        this.info(msg);
        break;
      }
    }
  }

  info(msg: String): void{
    console.log(`INFO: ${msg}`);
  }

  warn(msg: String): void{
    console.log(`WARNING: ${msg}`);
  }

  error(msg: String): void{
    console.log(`ERROR: ${msg}`);
  }

  fatal(msg: String): void{
    console.log(`FATAl: ${msg}`);
  }
}
