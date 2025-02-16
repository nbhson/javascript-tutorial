# Enum
> Lưu trữ giá trị chuỗi dưới dạng số

## Reverse Mapping 

```ts
enum PrintMedia {
    Newspaper = 1,
    Newsletter = 5,
    Magazine = 5,
    Book = 10
}

console.log(PrintMedia);

/**
 {
  '1': 'Newspaper',
  '5': 'Magazine',
  '10': 'Book',
  Newspaper: 1,
  Newsletter: 5,
  Magazine: 5,
  Book: 10
}
*/
```

## Computed Enum - Enum được tính toán

```ts
enum PrintMedia {
  Newsletter = getPrintMediaCode('newsletter'),
  Magazine = Newsletter * 3,
  Newspaper = 0,
  Book, // 1
}

function getPrintMediaCode(mediaName: string): number {
  if (mediaName === 'newsletter') {
      return 5;
  }
}
console.log(PrintMedia.Book);
```

## String Enum

```ts
enum PrintMedia {
  Newspaper = "NEWSPAPER",
  Newsletter = "NEWSLETTER",
  Magazine = "MAGAZINE",
  Book = "BOOK",
}
console.log(PrintMedia.Newspaper); //returns NEWSPAPER
console.log(PrintMedia["Magazine"]); //returns MAGAZINE
```


## Heterogeneous Enum - Enum không đồng nhất

```ts
enum Status {
  Active = "ACTIVE",
  Deactivate = 1,
  Pending,
}
```