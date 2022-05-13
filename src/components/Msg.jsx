const Msg = (props) => {
	const date = new Date(props.date);
	const correctHours =
		String(date.getHours()).length > 1 ? date.getHours() : `0${date.getHours()}`;
	const correctMinutes =
		String(date.getMinutes()).length > 1 ? date.getMinutes() : `0${date.getMinutes()}`;
	const formatDate = `${
		date.getMonth() + 1
	}/${date.getDate()}/${date.getFullYear()}, ${correctHours}:${correctMinutes}`;

	return (
		<>
			{props.owner ? (
				<div className="message_panel__my_msg">
					<div className="message_panel__msg_content">
						<div className="message_panel__msg_text">{props.message}</div>
						<div className="message_panel__msg_date">{formatDate}</div>
					</div>
				</div>
			) : (
				<div className="message_panel__other_msg">
					<div className="message_panel__other_image user_image">
						<img src={props.logo} alt="avatar" />
					</div>
					<div className="message_panel__msg_content">
						<div className="message_panel__msg_text">{props.message}</div>
						<div className="message_panel__msg_date">{formatDate}</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Msg;
