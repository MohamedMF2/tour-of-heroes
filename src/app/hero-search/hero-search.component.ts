import { HeroService } from "./../core/services/hero.service";
import { Hero } from "./../core/interfaces/hero";
import { Observable, Subject } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

@Component({
  selector: "app-hero-search",
  templateUrl: "./hero-search.component.html",
  styleUrls: ["./hero-search.component.css"],
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchterms = new Subject<string>();

  constructor(private heroServic: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchterms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchterms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroServic.searchHeroes(term))
    );
  }
}
