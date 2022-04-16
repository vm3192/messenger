const ChatItem = (props) => {
	return (
		<li className="control_panel__chats_item">
			<a className="control_panel__chats_link" href="#">
				<div className="control_panel__chats_logo user_image user_image--accept">
					<img src="/images/human.jpg" alt="avatar" />
				</div>
				<div className="control_panel__content">
					<h3 className="control_panel__chats_name">Alice Freeman</h3>
					<p className="control_panel__chats_msg">
						You are the worst! You are the worst! You are the worst! You are the worst! You are the
						worst! You are the worst! You are the worst!
					</p>
				</div>
				<div className="control_panel__date">Jun 12, 2017</div>
			</a>
		</li>
	);
};

export default ChatItem;
