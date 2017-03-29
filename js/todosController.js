(function(){
  'use strict'

  angular.module('todosApp')
    .controller('TodosController', TodosController)

    function TodosController() {
      var self = this
      self.allTodos = [
      	{title: 'Take out trash', importance: 1, completed:false},
      	{title: 'Finish WDI', importance: 2, completed:false},
      	{title: 'Finish todos app', importance: 3, completed:false},
      	{title: 'Finish bootsy app, baby', importance: 5, completed:true},
      ]
      self.newTodo = {
      	title: '',
      	importance: 0, // 1 - 5
      	completed: false
      }
      self.addTodo = addTodo
      function addTodo() {
        self.allTodos.push({
          title: self.newTodo.title,
          importance: self.newTodo.importance,
          completed: self.newTodo.completed
        })
        self.newTodo = {
          title: '',
          importance: 0,
          completed: false
        }
      }
      self.getCompleted = getCompleted
      function getCompleted() {
      	return self.allTodos.filter(function(todo){ return todo.completed })
      }

     }
}())
