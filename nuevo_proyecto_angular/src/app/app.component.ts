import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface IPerson{
  name:string,
  lastName:string,
  age?:number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:number = 20;
  subtitle:number=2;

  animals:string[]=["a","b","c","d","e","f","g"]

  person: IPerson = {
    name:"carlos",
    lastName:"perez",
    age:25
  }

  students:number[] = [1,2,3,4,5,6]
  parents:number[] = [7,8,9]

  constructor(){

    const {name, age} = this.person

    console.log("DESESTRUCTURACION: ", name,age)

    let both = [...this.students, ...this.parents]
    console.log('SPRED OPERATOR: ',both)

    console.log('REST OPERATOR: ', this.sum(2,4,6,5))

    /*console.log("subtract: ", this.subtract(8,4))
    console.log("MAP:", this.animals.map((animal) => (animal +'new')))
    console.log("FOR EACH:", this.animals.forEach((animal) => (animal +'new')))
    console.log("FIND:", this.animals.forEach((animal) => animal === 'z'))
    console.log("FILTER:", this.animals.filter((animal) => animal === 'c'))
    console.log("INDEXOF:", this.animals.indexOf('z'))*/

  }

  public sum(...persons:number[]){
    //return persons[0]+persons[1]
    return persons.reduce((accumulator, currentValue) => (accumulator+currentValue))
  }

  public sum2(num1:number, num2:number): number{
    return num1+num2;
  }

  private subtract(num1:number, num2:number): number{
    return num1-num2;
  }

  public getArray(){
    const persons:number[] = [1,2,3,4,5,6]
    for(let i =0; i < persons.length; i++){
      if(persons[i]%2 == 0){
        //console.log("person = ", persons[i])
      }
    }
  }


}
