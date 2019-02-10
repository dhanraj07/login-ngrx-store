import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleManagementService {

  constructor() { }

  checkUserAccess(accessList, route) {
    let isAccessAllowed = false;
    if (accessList.indexOf(route.url) >= 0) {
      isAccessAllowed = true;
    }
    return isAccessAllowed;
  }
}
