/// <reference lib="webworker" />

import { IRow } from './interfaces';

function generateObjectsArray(length: number): IRow[] {
  const objectsArray: IRow[] = [];

  for (let i = 1; i <= length; i++) {
    const newObj: IRow = {
      id: `${i}`,
      int: i,
      float: +(i + 0.5).toPrecision(18),
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      child: {
        id: `${i}`,
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      },
    };

    objectsArray.push(newObj);
  }

  return objectsArray;
}

let interval: any = null;

addEventListener('message', ({ data }) => {
  clearInterval(interval);

  const formData = JSON.parse(data);
  const generatedArray = generateObjectsArray(+formData.arraySize);

  if (+formData.timer >= 1000) {
    interval = setInterval(() => {
      postMessage(JSON.stringify(generatedArray));
    }, +formData.timer);
  }
});
