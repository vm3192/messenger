import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import ChatItem from './components/ChatItem';
import ChattingArea from './components/ChattingArea';
import Login from './components/login';
import { gapi } from 'gapi-script';

const clientId = '21407279081-04mdsfad5bhpti7qe870bf03joqn97sa.apps.googleusercontent.com';

function App() {
	const axios = require('axios').default;
	const [data, setData] = useState([]);
	const [search, setSearch] = useState('');
	const [newMsgInput, setNewMsgInput] = useState('');
	const [logged, setLogged] = useState(false);
	const [avatar, setAvatar] = useState('');

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
	}, [axios]);

	useEffect(() => {
		function start() {
			gapi.client.init({
				clientId: clientId,
				scope: '',
			});
		}

		gapi.load('client:auth2', start);
	}, []);

	function onSendClick(value, id) {
		let result;
		const newData = data.map((dataItem) => {
			if (dataItem.id === id) {
				result = [...dataItem.dialog, { msg: value, myMsg: true, dateMsg: Date.now(new Date()) }];
				dataItem = { ...dataItem, dialog: result };
				return dataItem;
			} else {
				return dataItem;
			}
		});
		axios.put(`https://625bd2e1398f3bc782af098c.mockapi.io/messengerData/${id}`, {
			dialog: result,
		});
		setData(newData);
		setNewMsgInput('');
		setTimeout(() => chuckAnswer(newData, id), 1000);
	}

	function chuckAnswer(data, id) {
		axios.get('https://api.chucknorris.io/jokes/random').then((response) => {
			let result;
			const newData = data.map((dataItem) => {
				if (dataItem.id === id) {
					result = [
						...dataItem.dialog,
						{ msg: response.data.value, myMsg: false, dateMsg: Date.now(new Date()) },
					];
					dataItem = { ...dataItem, dialog: result };
					return dataItem;
				} else {
					return dataItem;
				}
			});
			axios.put(`https://625bd2e1398f3bc782af098c.mockapi.io/messengerData/${id}`, {
				dialog: result,
			});
			setData(newData);
		});
		alert('New message');
	}

	const entryAction = (avatar, isLogged) => {
		setAvatar(avatar);
		setLogged(isLogged);
	};

	return (
		<>
			{!logged ? (
				<Login isLogged={entryAction} />
			) : (
				<div className="wrapper">
					<div className="control_panel">
						<div className="control_panel__top_area">
							<div className="control_panel__user_logo user_image user_image--accept">
								<img src={avatar} alt="avatar" />
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
									.sort(
										(a, b) =>
											b.dialog[b.dialog.length - 1].dateMsg - a.dialog[a.dialog.length - 1].dateMsg,
									)
									.filter((item) => item.userName.toLowerCase().includes(search.toLowerCase()))
									.map((chat) => {
										return (
											<ChatItem
												key={chat.id}
												id={chat.id}
												logo={chat.logo}
												name={chat.userName}
												msg={chat.dialog}
											/>
										);
									})}
							</ul>
						</div>
					</div>
					<div className="message_panel">
						<Routes>
							{data.map((chat) => {
								return (
									<Route
										key={chat.id}
										path={`/${chat.id}`}
										exact
										element={
											<ChattingArea
												id={chat.id}
												name={chat.userName}
												dialog={chat.dialog}
												onSendClick={onSendClick}
												newMsgInput={newMsgInput}
												setNewMsgInput={setNewMsgInput}
											/>
										}
									/>
								);
							})}
						</Routes>
					</div>
					<div className="bottom_line"></div>
				</div>
			)}
		</>
	);
}

export default App;
