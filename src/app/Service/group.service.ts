import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppGlobals } from '../ app.global';
import { Group } from '../Model/group';





@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient, private app: AppGlobals) { }

   getAllGroups() {
       return this.http.get<Group[]>(`${this.app.baseAPIUrl}/compagnie` );
    }

   addGroup(group : Group) {
     return this.http.post(`${this.app.baseAPIUrl}/compagnie` , group);
   }

   updateGroup(id : number , group : Group ) {
     return this.http.put(`${this.app.baseAPIUrl}/compagnie` , group);
   }

   deleteGroup(id: number) {
     return this.http.delete(`${this.app.baseAPIUrl}/compagnie` + id);
   }

   groups: Group[] = [];

   groupUpdated = new EventEmitter();

   getGroups() {
     return this.groups;
   }

   setGroups(groups) {
     this.groups = groups ;
     this.groupUpdated.emit(this.groups);
   }

  /* getGroup(id) {
    this.groups.forEach( (group) => {
     if (group.id == id) {
      return group;
     }
  });
  } */

}
