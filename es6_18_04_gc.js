let apple = {
  name : 'apple',
}

let orange = apple;

apple = null;
orange = null;

// gc 의 대상은?