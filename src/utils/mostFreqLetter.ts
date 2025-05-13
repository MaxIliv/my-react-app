function mostFreqLetter(str: string) {
  if (!str) throw new Error('No arguments');

  let arr = str.split('');
  let res = str[0];
  let count = arr.filter(x => x === res).length;

  for(let i = 1; i < str.length; i++) {
    let curr = str[i];
    let currCount = arr.filter(x => x === curr).length;

    if (currCount > count) {
      res = curr;
      count = currCount;
    }
  }

  return { res, count };
}

export default mostFreqLetter;