import { useEffect, useRef } from 'react';
import Msg from './Msg';

const ChattingArea = (props) => {
	const chatEndRef = useRef(null);

	useEffect(() => {
		chatEndRef.current?.scrollIntoView();
	}, [props.dialog]);

	return (
		<>
			<div className="message_panel__chat_header">
				<div className="message_panel__chat_logo user_image user_image--accept">
					<img src={props.logo} alt="avatar" />
				</div>
				<h2 className="message_panel__chat_name">{props.name}</h2>
			</div>
			<div className="message_panel__chatting_area">
				{props.dialog.map((msg, index) => {
					return <Msg key={`msg${index}`} logo={props.logo} message={msg.msg} owner={msg.myMsg} date={msg.dateMsg} />;
				})}
				<div ref={chatEndRef} />
			</div>
			<div className="message_panel__input_area">
				<label className="message_panel__input">
					<input
						value={props.newMsgInput}
						onChange={(e) => props.setNewMsgInput(e.target.value)}
						type="text"
						placeholder="Type your message"
						onKeyDown={props.newMsgInput ? (e) => props.onSendClick(props.newMsgInput, props.id, e) : null}
					/>
					<button
						onClick={
							props.newMsgInput ? (e) => props.onSendClick(props.newMsgInput, props.id, e) : null
						}
						type="submit">
						<img src="/images/send_icon.png" alt="send" />
					</button>
				</label>
			</div>
		</>
	);
};

export default ChattingArea;
