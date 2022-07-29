import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pages1',
  templateUrl: './pages1.component.html',
  styles: [
  ]
})
export class Pages1Component implements OnInit, OnChanges, DoCheck,
            AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  name    :string ="eduardo";
  seconds :number = 0;
  timerSuscription!: Subscription;

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSuscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    this.timerSuscription = interval(1000).subscribe( i => {
      this.seconds = i;
    })

  }

  save(){

  }

}
