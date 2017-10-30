import React, { Component } from 'react';
import { bool, node, string } from 'prop-types';
import { TweenLite } from 'gsap';
import Waves from 'node-waves';
import classnames from 'classnames';

// import 'node-waves/src/stylus/waves.styl';
import './Tap.styl';

Waves.init();

export default class Tap extends Component {

	static propTypes = {
		/** Additional class name */
		className: string,
		/** Enable light theme */
		light: bool,
		/** Enable waves effect */
		waves: bool,
		/** Enable fade effect */
		fade: bool,
		/** Enable scale affect */
		scale: bool,
		/** Component children */
		children: node,
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
	
	componentDidMount() {
		const { waves } = this.props;
		if (waves) this.attachWaves();
	}
	
	componentDidUpdate(){
		const { waves } = this.props;
		const attached = this.element.parentNode.classList.contains('waves-effect');
		if (waves && !attached) {
			this.attachWaves();
		} else if (!waves && attached) {
			this.destroyWaves();
		}
	}

	attachWaves() {
		const { light } = this.props;
		Waves.attach(this.element.parentNode, light ? 'waves-light' : null);
	}

	destroyWaves() {
		Waves.calm(this.element.parentNode);
		this.element.parentNode.classList.remove('waves-effect');
	}
	
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
		const { className, children, fade, light } = this.props;
		const { isPressed } = this.state;
		const blockClassName = classnames({
			'Tap': true,
			'Tap_light': light,
			'Tap_fade': isPressed && fade,
			[className]: className
		});
		return (
			<span
				className={ blockClassName }
				onTouchStart={ this.handleTouchStart }
				onTouchEnd={ this.handleTouchEnd }
				onMouseDown={ this.handleTouchStart }
				onMouseUp={ this.handleTouchEnd }
				onMouseLeave={ this.handleTouchEnd }
				ref={ (element) => { this.element = element; } }
			>
				{ children }
			</span>
		)
	}

}