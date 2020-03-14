import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {

  word: string = null;

  constructor(private page: Page, private dictionaryService: DictionaryService) {
    this.page.actionBarHidden = true;
  }


  ngOnInit() {
  }

  search() {
    this.dictionaryService.search(this.word);
  }
}
