import React, { Component } from 'react';
import { Menu } from 'antd';
import MenuConfig from './../../config/menuConfig';
import { NavLink } from 'react-router-dom';
import './index.less';
const { SubMenu } = Menu;

class NavLeft extends Component {

	componentWillMount() {
		const menuTreeNode = this.renderMenu(MenuConfig)
		// console.log(MenuConfig)
		this.setState({
			menuTreeNode
		})
	}

	renderMenu(data) {
		return data.map((item) => {
			if (item.children) {
				return (
					<SubMenu title={item.title} key={item.key}>
						{this.renderMenu(item.children)}
					</SubMenu>
				)
			}
			return (
				<Menu.Item title={item.title} key={item.key}>
					<NavLink to = {item.key}>
						{item.title}
					</NavLink>
				</Menu.Item>
			)
		})
	}
	// handleClick () {
	// 	let dom = document.querySelector(".logo");
	// 	console.log(dom);
	// 	// dom.append("haha");
	// 	dom.style.background = "red";
	// }
	render() {
		return (
			<div>
				<div className="logo">
					<img alt='' src="assets/logo-ant.svg" />
					<h1>Imooc MS</h1>
				</div>
				<Menu theme="dark">
					{this.state.menuTreeNode}
				</Menu>
				{/* <button onClick = {this.handleClick}>click me</button>	 */}
			</div>
		)
	}
}

export default NavLeft