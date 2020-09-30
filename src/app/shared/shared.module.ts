import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule
  ],
  exports: [MessageComponent]
})
export class SharedModule { }
