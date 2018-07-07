var taskApp = new Vue({
	el: '#taskApp',
	data: {
		newTodoText: '',
		tasks: [
		{ 
			id: 1,
			name: 'review Marxism',
			done: false
		},
		{ 
			id: 2,
			name: 'review Management',
			done: false 
		},
		{ 
			id: 3,
			name: 'memorize English translation',
			done: false 
		},
		{ 
			id: 4,
			name: 'prepare English listening',
			done: false 
		}
		],
		nextTodoId: 5,
	},
	methods: {
		addNewTodo: function () {
			this.tasks.push({
				id: this.nextTodoId++,
				name: this.newTodoText,
				done: false
			})
			this.newTodoText = ''
		},
		tasksDel: function (task) {
			this.tasks.splice(this.tasks.indexOf(task),1)
		}
	}
});
