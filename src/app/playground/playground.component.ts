import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
helloWorld: string = "Hello World!"
locations: any[] = [
  {
    id: 1,
    name: 'Philadelphia'
  },
  {
    id: 2,
    name: 'Los Angeles'
  }
];
gender: string = "M";
itemImageUrl = 'https://media.gq.com/photos/624356f6d3c1606db058cea2/16:9/w_1920,c_limit/81609466';
itemImageTitle = "Kobe Bryant!"
userName: string = "MelroseMejidana";
price1: number = 39.00;
price2: number = 2.99;
animal: string = "Lion";
isModalClose: boolean = false;

  constructor(private cdr: ChangeDetectorRef,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  changeHelloWorld(){
    this.helloWorld = "Hello! Marc Kenneth Lomio"
    this.cdr.detectChanges();
  }

  showModal(){
    const dialogRef = this.dialog.open(ModalComponent, {
       width: '460px',
      height: '570px',
       data: {name: "Marc Kenneth Lomio", animal: "Tiger"},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result != undefined){
        this.animal = result.animal;
        this.isModalClose = result.isDialogClose
        this.cdr.detectChanges();
      }
    });
  }
}
