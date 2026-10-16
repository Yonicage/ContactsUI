import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-screen',
  imports: [],
  templateUrl: './contact-screen.html',
  styleUrl: './contact-screen.css',
})
export class ContactScreen {

  @Input() userName!:string;
}
