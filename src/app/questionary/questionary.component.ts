
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from '@angular/router';
import { HelpService } from '../help.service';

@Component({
  selector: "app-root",
  templateUrl: "./questionary.component.html",
  styleUrls: ["./questionary.component.css"],
})
export class QuestionaryComponent implements OnInit {

  items: any;

  dynamicForm: FormGroup;

  name = "Angular";
  fields: any;

  constructor(private router: Router, private helpService: HelpService) {
    const controls = {};
    //user name and password
    this.fields = helpService.getFields();
    this.fields.forEach((res) => {
      const validationsArray = [];
      res.validations.forEach((val) => {
        if (val.name === "required") {
          validationsArray.push(Validators.required);
        }
        if (val.name === "pattern") {
          validationsArray.push(Validators.pattern(val.validator));
        }
      });
      controls[res.label] = new FormControl("", validationsArray);
    });
    //questionary
    this.items = helpService.getItems();
    this.items.forEach((res) => {
      if(res.item) {
        const validationsArray = [];
        res.item.forEach((val) => {
          //console.log(val);
          controls[val.linkId] = new FormControl("", Validators.required);
        });
      }
      else {
        controls[res.linkId] = new FormControl("", Validators.required);
      }
     });

    this.dynamicForm = new FormGroup(controls);

   }

  ngOnInit() {
    console.log("Reading local json files");
   // console.log(itemsJson);
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
    //output Json
    var responseJSON = JSON.stringify(this.dynamicForm.value);
    //console.log(responseJSON);

    this.router.navigate([`../hello`],
    {
      state: {
        userName: this.dynamicForm.value.Username,
        response: this.dynamicForm.value
      }
    });

   }




}

