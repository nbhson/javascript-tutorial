import { fromEvent, interval, of,  } from "rxjs"
import { delay, finalize, repeat, take, tap, timeout } from "rxjs/operators"

const observer = {
    next: (data: any) => console.log(data),
    error: (error: any) => console.error(error),
    complete: () => console.log('Completed!')
}

// tap - delay
fromEvent(document, 'click')
.pipe(
    tap((val) => console.log('before', val)),
    delay(3000),
    tap((val) => console.log('after', val)),
)
.subscribe(console.log);

// repeat
of('Hi').pipe(repeat(3), finalize(() => console.log('finalize'))).subscribe(console.log)

// timeout
of('Hi').pipe(delay(1000), timeout(1500)).subscribe(console.log)