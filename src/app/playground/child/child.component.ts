import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
@Input() rating: string = "";
userName: string = "";
@Input("userName") set getUserName(val: any){
  if(val != undefined ){
    this.userName = val
    this.userName = `${this.userName} is a username`
  }
}
@Output() notify: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.rating = `${this.rating} goodjob!`
  }


  clickOutputEventEmitter(){
    this.notify.emit({message:'Hello! I am Output Event Emitter'})
  }

}
