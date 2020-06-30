import React,{Component} from "react";

import "./App.css"
import Header from "../Header";
import Search from "../Search";
import List from "../List";
import AddItem from "../AddItem";

class App extends Component {
  
	maxId = 100;
	state ={
		todos: [ 
			this.createTodoItem("Drink coffee"),
			this.createTodoItem("Work on project"),
			this.createTodoItem("Go for a walk"),
		],
		searchName: ""   
	  }

	  
	  createTodoItem(label){
		  return{
			label,
			important: false,
			done:false,
			id: this.maxId++
		  }
	  }

  onDeleteItem = (id) =>{
		this.setState(({todos}) => {
			const idn = todos.findIndex((el) => el.id === id);
			
			const before = todos.slice(0, idn);
			const after = todos.slice(idn + 1);

			const newArray = [...before, ...after];
			return{
				todos: newArray
			}
		})
	
  }
  onAddItem = (text) => {
		let newItem = this.createTodoItem(text);
		this.setState(({todos}) => {
			const newArray = [...todos,newItem];
			return {
				todos: newArray
			}
		})
  }

  onMoveImportant = (id) => {
	this.setState(({todos}) => {
		const idn = todos.findIndex((el) => el.id === id);
	
		
		const oldItem = todos[idn];

		const newItem = {...oldItem, important:!oldItem.important};

		const newArray = [
			...todos.slice(0,idn),
			newItem,
			...todos.slice(idn + 1)
		];
		return{
			todos: newArray
		}

	})
  }	
  onMoveDone = (id) => {
			this.setState(({todos}) => {
				const idn = todos.findIndex((el) => el.id === id);
			
				
				const oldItem = todos[idn];

				const newItem = {...oldItem, done:!oldItem.done};

				const newArray = [
					...todos.slice(0,idn),
					newItem,
					...todos.slice(idn + 1)
				];
		
				return{
					todos: newArray
				}

			})
	
	}	
	onSearchChange = (searchName) => {
		this.setState({searchName});
	}

	onItems(items,searchName){
		if(searchName.length === 0){
			return items;
		} 
		
		return items.filter((item) => {
			return item.label.toLowerCase().indexOf(searchName.toLowerCase()) > -1
		})
	}

render(){
		const {todos,searchName} = this.state;
		const visibleItems = this.onItems(todos,searchName);
		const doneCount = todos.filter((el) => el.done === true).length;
		const todosCount = todos.length - doneCount;

	return(
		<div className="container main-contain">
			<Header toDo={todosCount} done={doneCount}/>
			<Search onSearchChange={this.onSearchChange}/>
			<List todos = {visibleItems} onDelete={this.onDeleteItem}
			onMoveImportant = {this.onMoveImportant}
			onMoveDone = {this.onMoveDone}/>

			<AddItem onAddItem ={this.onAddItem}/>
		</div>
	  )
}

}

export default App;