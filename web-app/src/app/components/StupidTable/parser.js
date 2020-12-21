/*
note data
[
  {
    id: "5f8172d40d2df0af620420c7",
    username: "user_en",

    title: "Programming language",
    elements: [
      {
        name: "java",
        criteria: [
          {
            speed: "normal",
            perdormance: "good"
          }
        ]
      },
      { name: "Python", criteria: [{ speed: "normal", perdormance: "good" }] },
      { name: "Golang", criteria: [{ speed: "normal", perdormance: "good" }] }
    ],
    date: new Date(),
    category: "IT"
  }
]


table structure
{
  [0-0]: { value: ''}
  [0-1]: { value: ''}
}
*/

function fromNote(note) {
  const data = {'0-0': {value: '#'}};
  let cols = [];
  for (let index = 0; index < note.elements.length; index++) {
    let element = note.elements[index];
    let colIdx = index + 1;

    data['0-' + colIdx] = {value: element.name};
    if (element.criteria.length > 0) {
      cols.push(element.criteria[0]);
    }
  }

  let colIdx = 1;
  for (const col of cols) {
    let keys = Object.keys(col);
    let rowIdx = 1;
    for (const key of keys) {
      data[rowIdx + '-0'] = {value: key};
      data[rowIdx + '-' + colIdx] = {value: col[key]};
      rowIdx++;
    }

    colIdx++;
  }

  return data;
}

function toNote(data) {
  const note = {};

  return note;
}

export default {
  fromNote,
  toNote
};

