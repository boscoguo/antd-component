import React from 'react'
import Child from './child'
export default class Life extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		count: 0
	// 	}
	// 	this.hanlderAdd = this.hanlderAdd.bind(this)
	// }
	state = {
		count:0
	}
	hanlderAdd = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	hanlderAdd() {
		this.setState({
			count: this.state.count + 1
		})
	}
	render() {
		return <div>
			<p>react 生命周期介绍</p>
			<button onClick={this.hanlderAdd}>点击一下</button>
			<button onClick={this.hanlderAdd}>点击一下啊</button>
			<p>{this.state.count}</p>
			<Child name = {this.state.count}/>
		</div>
	}
}