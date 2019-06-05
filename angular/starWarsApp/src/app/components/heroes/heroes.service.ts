import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HeroesIndexService {
  constructor(private http: HttpClient) {}

  public getHeroes(){
      return this.http.get("http://10.90.142.203:8080/");
  }
}
