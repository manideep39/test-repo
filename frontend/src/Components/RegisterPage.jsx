import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { register } from '../redux/login-reg/actions.js';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

export default function() {
	const dispatch = useDispatch();
	const isError = useSelector((state) => state.auth.isError);

	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Register
				</Typography>
				<form
					className={classes.form}
					noValidate
					onSubmit={(event) => {
						event.preventDefault();
						dispatch(register({ name, email, password }));
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								autoComplete="name"
								name="firstName"
								variant="outlined"
								required
								fullWidth
								id="firstName"
								label="First Name"
								autoFocus
								onChange={(e) => setName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Grid>
					</Grid>
					<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
						Register
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="#" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
		// <div>
		// 	<input type="text" onChange={(e) => setName(e.target.value)} />
		// 	<input type="text" onChange={(e) => setEmail(e.target.value)} />
		// 	<input type="text" onChange={(e) => setPassword(e.target.value)} />
		// 	<button onClick={() => dispatch(register({ name, email, password }))}>Register</button>
		// 	{isError && <h3>Registration failed</h3>}
		// </div>
	);
}
