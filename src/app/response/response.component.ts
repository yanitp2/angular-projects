import { Component, OnInit } from '@angular/core';
import {
   FormGroup,
  FormControl,
  FormArray,
} from "@angular/forms";
import { HelpService } from '../help.service';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  items: any;
  userName: string = "default";
  response: any;
  routeState: any;


  constructor( private helpService: HelpService, private router: Router) {

    this.routeState = this.router.getCurrentNavigation().extras.state;
    if (this.routeState) {
      //user name
      this.userName = this.routeState.userName ? this.routeState.userName : '';
     //responses
     this.response = this.routeState.response ? this.routeState.response : '';
    }

  }


  ngOnInit() {

    //questionary
    this.items = this.helpService.getItems();

    //add response to each item
    this.items.forEach((res) => {
      if(res.item) {
          res.item.forEach((val) => {
          console.log(val);
          val["response"] = this.response ? this.response[val.linkId] : "";
          console.log(val);
        });
      }
      else {
        res["response"] = this.response ? this.response[res.linkId] : "";
      }
     });

     //save new item Json to assets/QuestionnaireResponse.json
     this.saveResponseJson();
  }

  private saveResponseJson() {
        //write to file

    // const file = new Blob([this.response], { type: 'application/json' });
    // saveAs(file, '../assets/QuestionnaireResponse.json');


    //saveAs(this.response, '../assets/QuestionnaireResponse.json');
    //const writeJsonFile = require('write-json-file');
  }



}
