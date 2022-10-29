import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interface/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  ngOnInit(): void {
  }


  borrar(){
    this.dialogRef.close(true);
  }

  cancelar(){
    this.dialogRef.close();
  }

}
