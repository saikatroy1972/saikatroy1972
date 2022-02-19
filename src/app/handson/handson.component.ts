import { Component, OnInit } from '@angular/core';
import Handsontable from 'handsontable';
import { CustomEditor } from '../CustomEditor';


@Component({
  selector: 'app-handson',
  templateUrl: './handson.component.html',
  styleUrls: ['./handson.component.scss']
})
export class HandsonComponent implements OnInit {

  dataset: any[] = [
    {id: 1, name: 'Maruti', price: 10},
    {id: 2, name: 'Alto', price: 20},
    {id: 3, name: 'Hyundai', price: 30},
    {id: 4, name: 'Ford', price: 40},
    {id: 5, name: 'Ferrari', price: 50},
    {id: 6, name: 'BMW', price: 60},
  ];

  //reg = /^\d+$/;

  // number: any = [{
  //   type: 'custom',
  //   renderer: Handsontable.renderers.NumericRenderer,
  //   editor: Handsontable.editors.TextEditor,
  //   validator: Handsontable.validators.NumericValidator
  // }]

  // hotSettings: Handsontable.GridSettings = {
  //   startRows: 5,
  //   columns: [
  //     {
  //       editor: CustomEditor
  //     }
  //   ],
  //   colHeaders: true,
  //   colWidths: 200,
  //   licenseKey: 'non-commercial-and-evaluation'
  // };

  constructor() { 
    Handsontable.cellTypes.registerCellType('numeric', {
      renderer: Handsontable.renderers.NumericRenderer,
      editor: Handsontable.editors.NumericEditor,
      validator: Handsontable.validators.NumericValidator,
      // beforeKeyDown : function(e) {
      //   var reg = /^\d+$/;
      //   if (!reg.test(e.key)) {
      //     e.preventDefault()
      //   }
      // }
    });
  }

  // beforeKeyDown(e: any) {
  //   var reg = /^\d+$/;
  //   if (!reg.test(e.key)) {
  //     e.preventDefault()
  //   }
  // }

  ngOnInit(): void {
  }

}
