import { Component, OnInit } from '@angular/core';
import {openUrl} from "tns-core-modules/utils/utils";
import { Page } from 'tns-core-modules/ui/page/page';
@Component({
  selector: 'ns-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css'],
  moduleId: module.id,
})
export class CreditsComponent implements OnInit {

  constructor(private page:Page) { }

  ngOnInit() {
    this.page.actionBarHidden=true;
  }

  open(uri:string){
    openUrl(uri);
  }
}
