import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Cafe } from "./Cafe";
import { Environment } from "../../environment/Environment";

@Injectable({
  providedIn: "root"
})
export class CafeService {
  private apiUrl = Environment.baseUrl;

  constructor(private http: HttpClient) { }


  getCafes(): Observable<Cafe[]> {
    console.log(this.apiUrl)
    return this.http.get<Cafe[]>(this.apiUrl);
  }

}
