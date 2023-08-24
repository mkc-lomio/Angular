import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  
  save(): void {
    this.dialogRef.close({animal: this.data.animal, isDialogClose: true});
  }

  close(): void {
    this.dialogRef.close();
  }

}
