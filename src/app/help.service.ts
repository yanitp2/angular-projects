import { Injectable } from '@angular/core';

import * as itemsJson from "../assets/questionnaire.json";


@Injectable({
  providedIn: 'root'
})
export class HelpService {

  name: string;

  response: any;

  fields = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: "required",
          message: "Name Required",
        },
        {
          name: "pattern",
          validator: "^[a-zA-Z]+$",
          message: "Accept only text",
        },
      ],
    },
    {
      type: "password",
      label: "Password",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: "required",
          message: "Password Required",
        },
      ],
    },
  ];
  items: any = itemsJson.item;

  constructor() { }

  getFields() {
    return this.fields;
  }

  getItems() {
    console.log(itemsJson);
    return itemsJson.item;
  }



}
