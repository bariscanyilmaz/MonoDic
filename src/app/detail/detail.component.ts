import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';
import { WordViewModel } from '../models/word.model';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  moduleId: module.id,
})
export class DetailComponent implements OnInit {

  word:string;
  result:WordViewModel=null;
  constructor(private dicService:DictionaryService,private page: Page) { 
    this.page.actionBarHidden=true;
  }
  items:string[]=[];
  ngOnInit() {
    this.dicService.word.subscribe(r=>{
      this.result=r;
    })

   
  }

  onScroll(event:any){
   
  }

  search(){
    this.dicService.search(this.word);
  }
  

}
