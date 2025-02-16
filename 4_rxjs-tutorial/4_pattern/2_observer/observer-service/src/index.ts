import { Observable, Observer, Subscription, of, timer } from "rxjs";

const observerOne: Observer<any> = {
  next: (data: any) => console.log("Observer One", data),
  error: (error: any) => console.error("Observer One", error),
  complete: () => console.log("Observer One Completed!"),
};
const observerTwo: Observer<any> = {
  next: (data: any) => console.log("Observer Two", data),
  error: (error: any) => console.error("Observer Two", error),
  complete: () => console.log("Observer Two Completed!"),
};

export class MyService {
  private observables: Array<any> = [];
  public subscription: Subscription = new Subscription();

  constructor() {}

  register(observable: Observable<any>, observer: Observer<any>): void {
    this.observables.push({ observable, observer });
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }

  subscribe(timerDelay: number) {
    const timerSub = timer(0, timerDelay).subscribe(() => {
      this.observables.forEach((data) => {
        const sub = data.observable.subscribe(data.observer);
        this.subscription.add(sub);
      });
    });

    this.subscription.add(timerSub);
  }
}

const observableOne = of([1, 2, 3]);
const observableTwo = of([4, 5, 6]);

const myService = new MyService();
myService.register(observableOne, observerOne);
myService.register(observableTwo, observerTwo);
myService.subscribe(3000);

console.log(myService.subscription); // closed: false

setTimeout(() => {
  myService.unsubscribe();
  console.log(myService.subscription); // closed: true
}, 10000);
