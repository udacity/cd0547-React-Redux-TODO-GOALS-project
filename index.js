(function () {
  window.API = {}

  function fail () {
    return Math.floor(Math.random()*(5-1)) === 3
  }

  function generateId () {
    return Math.random().toString(36).substring(2);
  }

  var goals = [
    {
      id: generateId(),
      name: 'Learn Redux',
    },
    {
      id: generateId(),
      name: 'Read 50 books this year',
    },
  ];
  var todos = [
    {
      id: generateId(),
      name: 'Walk the dog',
      complete: false,
    },
    {
      id: generateId(),
      name: 'Wash the car',
      complete: false,
    },
    {
      id: generateId(),
      name: 'Go to the gym',
      complete: true,
    }
  ];

  API.fetchGoals = function () {
    return new Promise((res, rej) => {
      setTimeout(function () {
        res(goals)
      }, 2000)
    })
  }

  API.fetchTodos = function () {
    return new Promise((res, rej) => {
      setTimeout(function () {
        res(todos)
      }, 2000)
    })
  }

  API.saveTodo = function (name) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const todo = {
          id: generateId(),
          name: name,
          complete: false,
        }
        todos = todos.concat([todo]);
        fail() ? rej(todo) : res(todo);
      }, 300)
    })
  }

  API.saveGoal = function (name) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const goal = {
          id: generateId(),
          name: name,
        }
        goals = goals.concat([goal]);
        fail() ? rej(goal) : res(goal);
      }, 300)
    })
  }

  API.deleteGoal = function (id) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        goals = goals.filter((goal) => goal.id !== id);
        fail() ? rej(): res(goals);
      }, 300)
    });
  }

  API.deleteTodo = function (id) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        todos = todos.filter((todo) => todo.id !== id);
        fail() ? rej(): res(todos);
      }, 300)
    });
  }

  API.saveTodoToggle = function (id) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        todos = todos.map((todo) => todo.id !== id ? todo :
          Object.assign({}, todo, {complete: !todo.complete})
        );

        fail() ? rej(): res(todos);
      }, 300)
    });
  }
})()