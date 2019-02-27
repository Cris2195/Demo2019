import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Demo2019';
  tooltip = "come voglio io";
inputVar : string;

  changeName(){
    this.title = "ho cambiato titolo";
  }
  showAlert(){
    alert(this.inputVar);
  }


}


