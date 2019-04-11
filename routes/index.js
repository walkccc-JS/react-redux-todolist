const mongoose = require('mongoose');
const Todo = mongoose.model('todos');

module.exports = app => {
  app.get('/api/todos', async (req, res) => {
    const todos = await Todo.find().sort([['createdAt', -1]]);

    res.send(todos);
  });

  app.post('/api/todos', async (req, res) => {
    const { name } = req.body;
    const todo = new Todo({ name, createdAt: Date.now() });
    await todo.save();

    res.send(todo);
  });

  app.get('/api/todos/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    res.send(todo);
  });

  app.put('/api/todos/:id', async (req, res) => {
    const todoRef = await Todo.findById(req.params.id);
    const todo = await Todo.findOneAndUpdate({ _id: req.params.id }, { done: !todoRef.done });
    await todo.save();

    res.send(todo);
  });

  app.put('/api/todos/:id/edit', async (req, res) => {
    const { name } = req.body;
    const todo = await Todo.findOneAndUpdate({ _id: req.params.id }, { name });
    await todo.save();

    res.send(todo);
  });

  app.delete('/api/todos/:id', async (req, res) => {
    const id = req.params.id;
    const todo = await Todo.findByIdAndDelete(id);

    res.send(todo);
  });
};
