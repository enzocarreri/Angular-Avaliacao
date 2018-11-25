import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  constructor() { }
  @Input() vida1: string;
  @Input() vida2: string;
  @Input() vida3: string;
  
  ngOnInit(){    
  }
}
