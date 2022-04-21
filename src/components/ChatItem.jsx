import { Link } from 'react-router-dom';

const ChatItem = (props) => {
	let messageArr = props.msg.map((item) => item.msg);
	let message = messageArr[messageArr.length - 1];
	let dateArr = props.msg.map((item) => item.dateMsg);
	let lastDate = dateArr[dateArr.length - 1];

	let date = new Date(lastDate);
	let month;
	if (date.getMonth() === 0) {
		month = 'Jan';
	} else if (date.getMonth() === 1) {
		month = 'Feb';
	} else if (date.getMonth() === 2) {
		month = 'Mar';
	} else if (date.getMonth() === 3) {
		month = 'Apr';
	} else if (date.getMonth() === 4) {
		month = 'May';
	} else if (date.getMonth() === 5) {
		month = 'Jun';
	} else if (date.getMonth() === 6) {
		month = 'Jul';
	} else if (date.getMonth() === 7) {
		month = 'Aug';
	} else if (date.getMonth() === 8) {
		month = 'Sep';
	} else if (date.getMonth() === 9) {
		month = 'Oct';
	} else if (date.getMonth() === 10) {
		month = 'Nov';
	} else if (date.getMonth() === 11) {
		month = 'Dec';
	} else {
		month = '';
	}
	let currentDate = lastDate ? `${month} ${date.getDate()}, ${date.getFullYear()}` : ''; ;
	return (
		<li className="control_panel__chats_item">
			<Link className="control_panel__chats_link" to={`/${props.id}`}>
				<div className="control_panel__chats_logo user_image user_image--accept">
					<img src={props.logo} alt="avatar" />
				</div>
				<div className="control_panel__content">
					<h3 className="control_panel__chats_name">{props.name}</h3>
					<p className="control_panel__chats_msg">{message}</p>
				</div>
				<div className="control_panel__date">{currentDate}</div>
			</Link>
		</li>
	);
};

export default ChatItem;
