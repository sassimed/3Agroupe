import { Injectable , EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  login = "admin";
  pwd = "admin" ;

  logged = false;

  loggedUpdated = new EventEmitter();

  getLogged() {
  	return this.logged;
  }

  setLogged(logged) {
  	this.logged = logged;
  	this.loggedUpdated.emit(this.logged);
  }

}
