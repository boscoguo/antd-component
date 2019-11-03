import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Header from './components/header'
import Footer from './components/footer'
import NavLeft from './components/navleft'
import Home from './pages/home'
import './style/common.less'
class Admin extends Component {

	render() {
		return (
			<Row className="container">
				<Col className="nav-left" span={4}>
					<NavLeft />
				</Col>
				<Col className="main" span={20}>
					<Header />
					<Row className="content">
						{/* <Home /> */}
						{this.props.children}
					</Row>
					<Footer />
				</Col>
			</Row>
		)
	}
}

export default Admin