import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  box1Value:number=0
  box2Value:number=0

  @Output() response = new EventEmitter()

  public onAction(action:number){
    switch(action){
      case 1:
        this.onSum()
        break;
      case 2:
        this.onMul()
        break;
      default:
        this.onReset()
    }
  }

  public onSum(){
    this.response.emit({ result: Number(this.box1Value) + Number(this.box2Value), action: 'Sum' })
  }
  public onMul(){
    this.response.emit({ result: this.box1Value * this.box2Value, action: 'Mul' })
    
  }
  public onReset(){
    this.box1Value=0
    this.box2Value=0
    this.response.emit()
  }
}