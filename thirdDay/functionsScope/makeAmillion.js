function makeAmillion(num) {
  if ( num < 0 || isNaN(num)) {
    return 'ERROR';
  }

  if ( num > 1000000) {
    return num;
  }

  return makeAmillion(num * 10);
}
