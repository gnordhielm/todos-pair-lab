(function(){
  'use strict'

  angular.module('todosApp')
    .controller('TodosController', TodosController)

    function TodosController($scope) {
      $scope.allTodos = [
      	{title: 'Take out trash', importance: 1, completed:false},
      	{title: 'Finish WDI', importance: 2, completed:false},
      	{title: 'Finish todos app', importance: 3, completed:false},
      	{title: 'Finish bootsy app, baby', importance: 5, completed:true},
      ]
      $scope.newTodo = {
      	title: '',
      	importance: 0, // 1 - 5
      	completed: false
      }
      $scope.addTodo = addTodo
      function addTodo() {
        $scope.allTodos.push({
          title: $scope.newTodo.title,
          importance: $scope.newTodo.importance,
          completed: $scope.newTodo.completed
        })
        $scope.newTodo = {
          title: '',
          importance: 0,
          completed: false
        }
      }
      $scope.getCompleted = getCompleted
      function getCompleted() {
      	return $scope.allTodos.filter(function(todo){ return todo.completed })
      }

     }
}())
