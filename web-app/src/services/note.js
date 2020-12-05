import { NoteApi } from '../apis';


async function search(username, keyword, category) {
  return NoteApi.search(username, keyword, category);
}

async function load(username) {
  Promise.resolve(data);
  // return NoteApi.get(username);
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
    id:"5f8172d40d2df0af620420c7",
    username:"user_en",
    notes: {
      key: '',
      values: [
        {
          key: '',
          value: ''
        }
      ]
    }
  }
]