const Msg = (props) => {
	return (
		<div className="message_panel__other_msg">
			<div className="message_panel__other_image user_image">
				<img src="/images/human.jpg" alt="avatar" />
			</div>
			<div className="message_panel__msg_content">
				<div className="message_panel__msg_text">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur cumque
					repudiandae, ad excepturi doloribus.
				</div>
				<div className="message_panel__msg_date">4/22/17, 4:00 AM</div>
			</div>
		</div>
	);
};

export default Msg;
