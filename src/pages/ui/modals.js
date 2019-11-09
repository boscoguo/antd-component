import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';
import './ui.less';
export default class Modals extends Component {
	
	state = {
		showModal1: false,
		showModal2: false,
		showModal3: false,
		showModal4: false,
	}

	handleOpen (type) {
		this.setState({
			[type]: true
		})
	}
	
	handleCancel = () => {
		this.setState({
			showModal1: false
		})
	}

	handleConfirm = (type) => {
		Modal[type]({
			title:"确认？",
			content:'你学会了React了吗',
			onOk() {
				console.log("ok");
			},
			onCancel() {
				console.log("cancle");
			}
		})
	}

	render() {
		return (
			<div>
				 <Card title="基础模态框" className="card-wrap">
					<Button type="primary" onClick={() => this.handleOpen("showModal1")}>Open</Button>
					{/* <Button type="primary" onClick={this.handleOpen.bind(this)}>Open</Button> 一种函数写法 */}
					<Button type="primary" onClick={() => this.handleOpen("showModal2")}>自定义页脚</Button> {/*两种函数写法*/}
					<Button type="primary" onClick={() => this.handleOpen("showModal3")}>顶部20px弹框</Button>
					<Button type="primary" onClick={() => this.handleOpen("showModal4")}>水平垂直居中</Button>
				</Card>
				<Card title="信息确认框" className="card-wrap">
					<Button type="primary" onClick={() => this.handleConfirm("confirm")}>Confirm</Button>
					{/* <Button type="primary" onClick={this.handleConfirm.bind(this)}>Open</Button> 一种函数写法 */}
					<Button type="primary" onClick={() => this.handleConfirm("info")}>Infor</Button> {/*两种函数写法*/}
					<Button type="primary" onClick={() => this.handleConfirm("success")}>Success</Button>
					<Button type="primary" onClick={() => this.handleConfirm("warning")}>Warning</Button>
				</Card>
				<Modal
					 title="React"
					 visible={this.state.showModal1}
					 onCancel={ this.handleCancel } //第三种函数写法
				>
					<p>react 学习</p>	
				</Modal>
				<Modal
					 title="React"
					 visible={this.state.showModal2}
					 okText="好的"
					 cancelText="算了"
					 onCancel={() => {
							 this.setState({
								 showModal2:false
							 })
						 }
					  } //第三种函数写法
				>
					<p>react 学习</p>	
				</Modal>
				<Modal
					 title="React"
					 style={{top:20}}
					 visible={this.state.showModal3}
					 onCancel={() => {
							 this.setState({
								 showModal3:false
							 })
						 }
					  } //第三种函数写法
				>
					<p>react 学习</p>	
				</Modal>
				<Modal
					 title="React"
					 wrapClassName="vertical-center-modal"
					 visible={this.state.showModal4}
					 onCancel={() => {
							 this.setState({
								 showModal4:false
							 })
						 }
					  } //第三种函数写法
				>
					<p>react 学习</p>	
				</Modal>
			</div>
		)
	}
} 