import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'react-styleguidist/lib/rsg-components/Styled';
import { Logo, Heading } from 'chramework';

const styles = ({ fontFamily, fontSize, color, mq }) => ({
	root: {
		wordBreak: 'break-word'
	},
	header: {
		display: 'flex',
		padding: [[15, 0]],
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 30,
		[mq.small]: {
			paddingTop: 0,
			marginBottom: 20,
		},
	},
	githubLink: {
		marginLeft: 20,
		fontFamily: fontFamily.base,
		fontSize: fontSize.base,
		color: color.link,
		'&:hover': {
			marginLeft: 20,
			fontFamily: fontFamily.base,
			fontSize: fontSize.base,
			color: color.linkHover,
		},
	},
	telegramLink: {
		fontFamily: fontFamily.base,
		fontSize: fontSize.base,
		color: color.link,
		'&:hover': {
			fontFamily: fontFamily.base,
			fontSize: fontSize.base,
			color: color.linkHover,
		},
		[mq.small]: {
			display: 'none',
		},
	},
	promo: {
		marginBottom: 90,
		[mq.small]: {
			marginBottom: 55,
		},
	},
	heading: {
		marginBottom: 10,
	},
	text: {
		fontSize: fontSize.base,
		fontFamily: fontFamily.base,
		color: color.base,
	},
	copyright: {
		marginTop: 90,
		fontSize: fontSize.base,
		fontFamily: fontFamily.base,
		color: color.base
	}
});

function ComponentsRenderer({ classes, children }) {
	return (
		<div className={classes.root}>
			<div class={classes.promo}>
				<header className={classes.header}>
					<Logo url="http://chulakov.ru/" external />
					<div className={classes.links}>
						<a className={classes.telegramLink} href="https://t.me/deepdigital" target="_blank">Telegram-channel (RUS)</a>
						<a className={classes.githubLink} href="https://github.com/OlegChulakovStudio/react-interactions" target="_blank">GitHub Project</a>
					</div>
				</header>
				<div className={classes.heading}>
					<Heading level={3} tagName="h1">react-interactions</Heading>
				</div>
				<div className={classes.text}>
					React component for micro-interactions
				</div>
			</div>
			{children}
			<div className={classes.copyright}>
				&copy; Chulakov Digital
			</div>
		</div>
	);
};

ComponentsRenderer.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Styled(styles)(ComponentsRenderer);