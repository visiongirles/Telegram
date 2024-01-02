let text = `wood stone iron bear :3 wood stone iron bear :3 `;
let lines = text.split('\n');
let number = 220001;
let numberedText = lines
  .map((line) => {
    let numberedLine = line + ' ' + number;
    number++;
    return numberedLine;
  })
  .join('\n');
console.log(numberedText);
