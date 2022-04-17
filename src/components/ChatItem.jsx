const ChatItem = (props) => {
	let myDate = new Date(props.date);
	let currentDate = `${myDate.getMonth() + 1} ${myDate.getDate()}, ${myDate.getFullYear()}`;
	return (
		<li className="control_panel__chats_item">
			<a className="control_panel__chats_link" href="#">
				<div className="control_panel__chats_logo user_image user_image--accept">
					<img src={props.logo} alt="avatar" />
				</div>
				<div className="control_panel__content">
					<h3 className="control_panel__chats_name">{props.name}</h3>
					<p className="control_panel__chats_msg">{props.msg}</p>
				</div>
				<div className="control_panel__date">{currentDate}</div>
			</a>
		</li>
	);
};

export default ChatItem;
