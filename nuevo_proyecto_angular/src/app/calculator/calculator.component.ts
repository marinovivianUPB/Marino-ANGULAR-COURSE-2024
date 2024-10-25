import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [FormsModule],
  //templateUrl: './calculator.component.html',
  template: `
  <div class="calculator">
  <p>Calculator</p>
  <input type="text" [(ngModel)]="box1Value" />
  <input type="text" [(ngModel)]="box2Value" />
  <div class="button-container">
    <button class="sum" (click)="onAction(1)">Sum</button>
    <button class="mul" (click)="onAction(2)">Mul</button>
    <button class="reset" (click)="onAction(3)">Reset</button>
    <button (click)="onLogin()">LOGIN</button>
  </div>
  <p>box1Value: {{ box1Value }}</p>
  <p>box2Value: {{ box2Value }}</p>
</div>`,
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent implements OnInit{

  box1Value:number=0
  box2Value:number=0

  @Output() response = new EventEmitter()

  constructor (private _activatedRoute: ActivatedRoute, private _authService: AuthService) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((params) => {
        console.log("Query params: ",params)
    })
  }

  onLogin(){
    this._authService.login()
  }

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