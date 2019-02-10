import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessMapperService {
  userAcessList: any = {};
  allowedRoutes = [];
  constructor() {}

 /*  getUserAccessList() {
    debugger;
    this.store.select(state => state.login.useraccess).pipe(take(1)).subscribe(useraccesslist => {
      this.userAcessList = useraccesslist;
      this.mapRoutes();
    });
  } */

  mapRoutes(accessList, routes) {
    (Object.getOwnPropertyNames(accessList)).forEach(role => {
      switch (role) {
        case 'Candidate':
          this.allowedRoutes.push(routes.Candidate);
          // this.exploreCandidate();
          break;
        case 'Client':
          this.allowedRoutes.push(routes.Client);
          // this.exploreClient();
          break;
        case 'JobOrder':
          this.allowedRoutes.push(routes.Job_Order);
          // this.exploreJobOrder();
          break;
        default:
          break;
      }
    });
    return this.allowedRoutes;
  }

  exploreCandidate() {
    this.userAcessList.Candidate.forEach(element => {
    });
  }

  exploreClient() {}

  exploreJobOrder() {}
}
