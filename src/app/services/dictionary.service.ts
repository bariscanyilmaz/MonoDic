import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WordViewModel } from '../models/word.model';
import { BehaviorSubject } from 'rxjs';
import { RouterExtensions } from 'nativescript-angular/router';
import * as AppSettings from "tns-core-modules/application-settings";
@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  word$: BehaviorSubject<WordViewModel> = new BehaviorSubject<WordViewModel>(null);
  constructor(private http: HttpClient, private router: RouterExtensions) {

  }

  search(q: string) {

    this.http.get<WordViewModel>(`https://wordsapiv1.p.rapidapi.com/words/${q}`, {
      headers: {
        'x-RapidAPI-Host': 'api-host',
        'X-RapidAPI-Key': 'api-key'
      }
    }).subscribe(r => {
      this.word$.next(r);

      setTimeout(() => {
        this.router.navigate(['/detail']);
      }, 300);

    }, err => {
      let options = {
        title: "Sorry :(",
        message: `${q} not found`,
        okButtonText: "OK"
      };

      alert(options);
    });



  }

  get word() {
    return this.word$.asObservable();
  }
}
