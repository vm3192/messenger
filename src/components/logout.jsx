import { GoogleLogout } from 'react-google-login';

const clientId = '21407279081-04mdsfad5bhpti7qe870bf03joqn97sa.apps.googleusercontent.com';

const LogOut = () => {
	const onSuccess = (res) => {
		console.log('Log out successfull');
	};

	return (
		<div id="signOutButton">
			<GoogleLogout
				clientId={clientId}
				buttonText="Logout"
				onLogoutSuccess={onSuccess}
			/>
		</div>
	);
};

export default LogOut;
