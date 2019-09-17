import React, { Component } from "react"


export default class Child extends Component {

	componentWillMount() {
		console.log("will Mount")
	}
	componentDidMount() {
		console.log("did Mount")
	}
	componentWillReceiveProps(newProps) {
		console.log("will receive" + newProps.name)
	}
	shouldComponentUpdate() {
		console.log("should update")
		return true
	}
	componentWillUpdate() {
		console.log("will update")
	}
	componentDidUpdate() {
		console.log("did update")
	}
	render() {

		return <div>
			<p>子组件的演示</p>
			<p>{this.props.name}</p>
		</div>
	}
}