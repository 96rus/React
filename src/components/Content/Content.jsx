import React from 'react'
import './Content.css'
import Messages from './Messages/Messages'
import Notifications from './Notifications/Notifications'
import Stats from './Stats/Stats'
import Settings from './Settings/Settings'

const Content = () => {
	return (
		<div className='content'>
			<Messages />
			<Notifications />
			<Stats />
			<Settings />
		</div>
	)
}

export default Content