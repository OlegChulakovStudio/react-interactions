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
		fontFamily: fontFamily.base,
        fontSize: fontSize.base,
        color: color.link,
		'&:hover': {
            fontFamily: fontFamily.base,
            fontSize: fontSize.base,
            color: color.linkHover,
		},
    },
    promo: {
        marginBottom: 90,
		[mq.small]: {
            marginBottom: 55,
		},
    },
});

function ComponentsRenderer({ classes, children }) {
    return (
        <div className={classes.root}>
            <div class={classes.promo}>
                <header className={classes.header}>
                    <Logo url="http://chulakov.ru/" external />
                    <a className={classes.githubLink} href="https://github.com/OlegChulakovStudio/react-interactions" target="_blank">GitHub</a>
                </header>
                <Heading level={3} tagName="h1">react-interactions</Heading>
            </div>
            {children}
        </div>
    );
};

ComponentsRenderer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Styled(styles)(ComponentsRenderer);