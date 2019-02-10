import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { map } from "rxjs/operators";
@Injectable()
export class GetService {
  constructor(private httpService: HttpService) {}

  getOpenCases(params) {
    return this.httpService
      .post("Booking/GetOpenBookingCases", params, true)
      .pipe(
        map(data => {
          return data;
        })
      );
  }
}
