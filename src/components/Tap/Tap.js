import React, { Component } from 'react';
import { bool, node, string } from 'prop-types';
import { TweenLite } from 'gsap'
import classnames from 'classnames';
import './Tap.styl';

export default class Tap extends Component {

	static propTypes = {
		className: string,
		light: bool,
		waves: bool,
		fade: bool,
		scale: bool,
		children: node
	};

	static defaultProps = {
		className: '',
		light: false,
		waves: false,
		fade: false,
		scale: false,
		children: null
	};

	state = {
		isPressed: false
	};
	
	getScaleElement(){
		const { scale, children } = this.props;
		if (scale && children) {
			return this.element.childNodes;
		} else if (scale) {
			return this.element.parentNode;
		} else {
			return null;
		}
	}

	handleTouchStart = () => {
		this.setState({ isPressed: true });
		const scaleElement = this.getScaleElement();
		if (scaleElement) TweenLite.to(scaleElement, 0.2, { scale: 0.96 });
	}

	handleTouchEnd = () => {
		this.setState({ isPressed: false });
		const scaleElement = this.getScaleElement();
		if (scaleElement) TweenLite.to(scaleElement, 0.2, { scale: 1 });
	}

	render() {
		const { className, children, fade } = this.props;
		const { isPressed } = this.state;
		const blockClassName = classnames({
			'Tap': true,
			'Tap_fade': isPressed && fade,
			[className]: className
		});
		return (
			<span
				className={ blockClassName }
				onTouchStart={ this.handleTouchStart }
				onTouchEnd={ this.handleTouchEnd }
				ref={ (element) => { this.element = element; } }
			>
				{ children }
			</span>
		)
	}

}