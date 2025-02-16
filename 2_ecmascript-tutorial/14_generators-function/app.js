function* idCreator() {
    let i = 0;
    while (true)
      yield i++;
  }
  
  const ids = idCreator();
  
  console.log(ids.next().value);
  // 0
  console.log(ids.next().value);
  // 1
  console.log(ids.next().value);
  // 2
  // etc...