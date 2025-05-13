function verbose(num: number) {
  const dict = [null, null, 'double', 'triple', 'quadriple'];

  return dict[num];
}

function findMagicIndex(input: string, chunkSize: number) {
  const log = [];
  let res = null;

  for (let i = 0; i < input.length; i++) {
    const chunk = input.slice(i, i + chunkSize);
    const set = new Set(chunk);

    if (chunk.length === set.size && chunk.length === chunkSize) {
      res = `result ${i} ${chunk}`;
      break;
    }

    const acc = chunk.split('').reduce((acc: {[key: string]: number;}, x: string) => {
      acc[x] ? acc[x]++ : acc[x] = 1;
      return acc;
    }, {});

    const arr = Object.entries(acc).sort((a, b) => b[1] - a[1]);

    log.push(arr[0][0], verbose(arr[0][1]));
  }

  return { res, log };
}

export default findMagicIndex;