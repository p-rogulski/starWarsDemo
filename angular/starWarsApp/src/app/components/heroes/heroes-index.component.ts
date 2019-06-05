import { Component, OnInit } from "@angular/core";
import {HeroesIndexService} from "./heroes.service";


@Component({
  selector: "heroes-index",
  templateUrl: "./heroes-index.component.html",
  styleUrls: ["./heroes-index.component.css"],
  providers:[HeroesIndexService]
})

export class HeroesIndexComponent implements OnInit{
        public heroes;
        constructor(private heroesService:HeroesIndexService){}
vv
    ngOnInit(){
        this.heroesService.getHeroes()
        .subscribe(heroes => {
            this.heroes = heroes;
        })
    }
    
}

