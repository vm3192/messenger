import { GoogleLogin } from 'react-google-login';

const clientId = '21407279081-04mdsfad5bhpti7qe870bf03joqn97sa.apps.googleusercontent.com';

const Login = (props) => {
	const onSuccess = (res) => {
		// console.log(res);
		props.isLogged(res.profileObj.imageUrl, true)
	};

	const onFailure = (res) => {
		console.log(res);
	};

	return (
		<div className="loginWrapper">
			<GoogleLogin
				clientId={clientId}
				buttonText="Log in with Google"
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={'single_host_origin'}
			/>
		</div>
	);
};

export default Login;
