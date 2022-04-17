import { useState, useEffect } from 'react';
import './App.scss';
import ChatItem from './components/ChatItem';
import Msg from './components/Msg';

function App() {
	const axios = require('axios').default;
	const [data, setData] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		axios
			.get('https://625bd2e1398f3bc782af098c.mockapi.io/messengerData')
			.then(function ({ data }) {
				// handle success
				setData(data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, []);

	return (
		<div className="wrapper">
			<div className="control_panel">
				<div className="control_panel__top_area">
					<div className="control_panel__user_logo user_image user_image--accept">
						<img src="/images/human.jpg" alt="avatar" />
					</div>
					<label className="control_panel__search">
						<input
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							type="search"
							placeholder="Search or start new chat"
						/>
					</label>
				</div>
				<div className="control_panel__chats">
					<h1 className="control_panel__title">Chats</h1>
					<ul className="control_panel__chats_list">
						{data
							.filter((item) => item.userName.toLowerCase().includes(search.toLowerCase()))
							.map((chat) => {
								return (
									<ChatItem
										key={chat.id}
										logo={chat.logo}
										name={chat.userName}
										msg={chat.userMsg}
										date={chat.date}
									/>
								);
							})}
					</ul>
				</div>
			</div>
			<div className="message_panel">
				<div className="message_panel__chat_header">
					<div className="message_panel__chat_logo user_image user_image--accept">
						<img src="/images/human.jpg" alt="avatar" />
					</div>
					<h2 className="message_panel__chat_name">Josefina</h2>
				</div>
				<div className="message_panel__chatting_area">
					<Msg />
					<Msg />
					<Msg />
					<Msg />
					<Msg />
					<Msg />
					<Msg />
					<Msg />
					<Msg />

					<div className="message_panel__my_msg">
						<div className="message_panel__msg_content">
							<div className="message_panel__msg_text">Lorem ipsum dolor sit amet.</div>
							<div className="message_panel__msg_date">4/22/17, 4:05 AM</div>
						</div>
					</div>
				</div>
				<div className="message_panel__input_area">
					<label className="message_panel__input">
						<input type="text" placeholder="Type your message" />
						<button type="submit">
							<img src="/images/send_icon.png" alt="send" />
						</button>
					</label>
				</div>
			</div>
			<div className="bottom_line"></div>
		</div>
	);
}

export default App;
