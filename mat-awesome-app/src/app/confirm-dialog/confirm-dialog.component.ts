import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  @Output()
  public confirmed: EventEmitter<void> = new EventEmitter();
  @Output()
  public cancelled: EventEmitter<void> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any){
      console.log(dialogRef);
      console.log(data);
  }

  onYes(){
    this.confirmed.emit();
    this.dialogRef.close();
  }
  onNo(){

    this.cancelled.emit();
    this.dialogRef.close();
  }
}
