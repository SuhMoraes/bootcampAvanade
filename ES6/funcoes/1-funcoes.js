function getName(){
  return 'Suhailah Alves';
}

function logFn(fn) {
  console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);