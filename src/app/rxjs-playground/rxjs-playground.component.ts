import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription, count, of, map, filter  } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-rxjs-playground',
  templateUrl: './rxjs-playground.component.html',
  styleUrls: ['./rxjs-playground.component.scss']
})
export class RxjsPlaygroundComponent implements OnInit {
  country: string = "New York";
  weatherApiUrl = 'https://api.example.com/weather';
  selectedCity: Observable<any> = new Observable<any>();
  
  constructor(){

  }

  ngOnInit(){

this.subscription();
this.unsubscribe();

this.pipe1();
this.pipe2();
this.pipe3();

  }


  subscription(){
    console.log("Subscribe Subscription")
    let all_nums$ = of(1, 7, 5, 10, 10, 20);
let final_val = all_nums$.pipe(count());
final_val.subscribe(x => {
  console.log("The count is "+x)
}); 

// to execute the observable we need to subscribe to it.
  }

  unsubscribe(){
    console.log("Unsubscribe Subscription")
    let all_nums$ = of(1, 7, 5, 10, 10, 20);
   let final_val = all_nums$.pipe(count());
  let test = final_val.subscribe(x => console.log("The count is "+x));
  test.unsubscribe(); // A call to unsubscribe() method will remove all the resources used for that observable 
  }
  

  pipe1(){
    console.log("Pipe 1")
    of(1, 2, 3).pipe(map(num => num * 10)).subscribe(value => {
      console.log(value);
   });
  }

  pipe2(){
    console.log("Pipe 2")
    of(1, 2, 3).pipe(
      map(num => num * 10),
      map(num => num - 5)
    ).subscribe(value => {
      console.log(value);
    });
  }

  pipe3(){
    console.log("Pipe 3")
    of(1, 2, 3).pipe(
      map(num => num * 10),
      map(num => num - 5),
      filter(num => num < 20)
    ).subscribe(value => {
      console.log(value);
    });
  }
}
