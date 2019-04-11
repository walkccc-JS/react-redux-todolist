# react-redux-todolist

> A simple todolist app built with React, Redux & MongoDB.

Implement the basics of RESTful API.

All codes are written in ES7 fashion and formatted by `prettier`.

I've hosted it by heroku: [react-redux-todolist](https://react-redux-todolist.herokuapp.com/).

Please don't abuse it 🙂

## API

| Method   | URL                 | Operation                   |
| :------- | :------------------ | :-------------------------- |
| `GET`    | /api/todos          | Fetch all todos             |
| `POST`   | /api/todos          | Create a new todo           |
| `GET`    | /api/todos/:id      | Fetch a todo with given id  |
| `PUT`    | /api/todos/:id      | Toggle a todo with given id |
| `PUT`    | /api/todos/:id/edit | Update a todo with given id |
| `DELETE` | /api/todos/:id      | Delete a todo with given id |

## Development

After setting your MongoDB Atlas cluster, type following in your `/config/dev.js`:

```js
module.exports = {
  mongoURI: 'mongodb+srv://{username}:{password}@{database_name}.mongodb.net/test?retryWrites=true'
};
```

Run:

```bash
npm i && npm i --prefix client  # install dependencies
npm run dev                     # run the development environment
```
