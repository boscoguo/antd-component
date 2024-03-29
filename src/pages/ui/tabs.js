import React, { Component } from 'react';
import { Card, Button, Tabs, message, Icon } from 'antd';
import './ui.less';

const { TabPane } = Tabs;

export default class Tab extends Component {

	newTabIndex = 0;
	handleCallback = (key) => {
		message.info("Hi,您选择了页签" + key)
	}

	componentWillMount() {
		const panes = [
			{
				title: "Tab1",
				content: "Tab 1",
				key: "1"
			},
			{
				title: "Tab2",
				content: "Tab 2",
				key: "2"
			},
			{
				title: "Tab3",
				content: "Tab 3",
				key: "3"
			}
		]
		this.setState({
			activeKey:panes[0].key,
			panes
		})
	}

	onChange = (activeKey)=> {
		this.setState({
			activeKey
		})
	}

	onEdit = (targetKey, action) => {
		this[action](targetKey);
	}

	add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
	};
	
	render() {
		return (
			<div>
				<Card title="tab页签" className="card-wrap">
					<Tabs defaultActiveKey="1" onChange={this.handleCallback}>
						<TabPane tab="Tab 1" key="1">
							Content of Tab Pane 1
								</TabPane>
						<TabPane tab="Tab 2" disabled key="2">
							Content of Tab Pane 2
								</TabPane>
						<TabPane tab="Tab 3" key="3">
							Content of Tab Pane 3
								</TabPane>
					</Tabs>
				</Card>
				<Card title="tab带图的页签" className="card-wrap">
					<Tabs defaultActiveKey="1" onChange={this.handleCallback}>
						<TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">
							Content of Tab Pane 1
								</TabPane>
						<TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">
							Content of Tab Pane 2
								</TabPane>
						<TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">
							Content of Tab Pane 3
								</TabPane>
					</Tabs>
				</Card>
				<Card title="tab带图的页签" className="card-wrap">
					<Tabs 
						onChange={this.onChange}
						activeKey={this.state.activeKey}
						// onChange={this.handleCallback}
						type="editable-card"
						onEdit={this.onEdit}
					>
						{
							this.state.panes.map((pane) => {
								return <TabPane 
													tab={pane.title}
													key={pane.key}
												/>
							})
						}
					</Tabs>
				</Card>
			</div>
		)
	}
} 