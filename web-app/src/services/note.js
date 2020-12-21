import { NoteApi } from '../apis';


async function search(username, keyword, category) {
  return NoteApi.search(username, keyword, category);
}

async function load(username) {
  // return NoteApi.get(username);

  return Promise.resolve(data);
}

async function save(data) {
  return NoteApi.edit(data);
}


export default {
  search,
  load,
  save
}


const data = [
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
            performance: "good"
          }
        ]
      },
      { name: "Python", criteria: [{ speed: "good", performance: "good" }] },
      { name: "Golang", criteria: [{ speed: "normal", performance: "good" }] }
    ],
    date: new Date(),
    category: "IT"
  },
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
            performance: "good"
          }
        ]
      },
      { name: "Python", criteria: [{ speed: "normal", performance: "good" }] },
      { name: "Golang", criteria: [{ speed: "normal", performance: "good" }] }
    ],
    date: new Date(),
    category: "IT"
  }
]