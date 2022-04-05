import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raclette party';

  isThisIngredientVital:boolean=true;
  displayGuestList:boolean=true;
  songList:string[]=["Alejandro", "Ne Me quitte pas", "le temps est bon"];
}
