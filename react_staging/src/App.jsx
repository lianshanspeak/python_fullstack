import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
	
	getStudentData = () => {
	  axios.get('http://localhost:5000/students').then(
		response => {console('成功了',response.data);},
		error => {console('失败了',error);}
	  )
	}
	

	render(){
		return(
			<div>
				<button onClick={this.getStudentData}>点我获取学生数据</button>
			</div>
		)
	}
}