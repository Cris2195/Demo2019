import { Component, OnInit } from '@angular/core';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  title = 'Demo2019';
  tooltip = "come voglio io";
inputVar : string;

  constructor() { }
  changeName(){
    this.title = "ho cambiato titolo";
  }
  showAlert(){
    const sampleService : SampleService = new SampleService();
    sampleService.showAlert(this.inputVar);
    
  }
  ngOnInit() {
  }


}
 








