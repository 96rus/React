import React from 'react'
import content from './Content.module.css'
import Messages from './Messages/Messages'
import Notifications from './Notifications/Notifications'
import Stats from './Stats/Stats'
import Settings from './Settings/Settings'

const Content = () => {
	return (
		<div className={content.content}>
			<Messages />
			<Notifications />
			<Stats />
			<Settings />
		</div>
	)
}

export default Content