var React = require('react');

module.exports = React.createClass({
	getDefaultProps: function() {
		return {
			className: 'l-content'
		};
	}
	
	, render: function() {
		/* jshint ignore:start */
		return(
			<div className={ this.props.className }>
				<h2>Orchestra</h2>
			</div>
		);
		/* jshint ignore:end */
	}
});