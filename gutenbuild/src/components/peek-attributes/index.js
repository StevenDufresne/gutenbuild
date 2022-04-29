import { debounce } from 'lodash';

import React, { Component } from 'react';
import { PanelBody } from '@wordpress/components';
import { trunc } from '../../utils/misc';

class PeekAttributes extends Component {
	constructor() {
		super();
		this.state = {
			block: undefined,
		};

        this.update = this.update.bind(this);
		this.debouncedMM = debounce( this.update, 300 );
	}
	update( e ) {
		const el = document.elementFromPoint( e.pageX, e.pageY );
		const attr = el.getAttribute( 'data-block' );

		if ( attr ) {
			const block = wp.data
				.select( 'core/block-editor' )
				.getBlocksByClientId( attr )[ 0 ];
			this.setState( { block: block } );
		}
	}

	componentDidMount() {
		document.addEventListener( 'mousemove', this.debouncedMM );
	}

	componentWillUnmount() {
		document.removeEventListener( 'mousemove', this.debouncedMM );
	}

	render() {
		return (
			<PanelBody>
				<ul>
					{ this.state.block ? (
						Object.keys( this.state.block )
							.filter(
								( key ) =>
									! [
										'isValid',
										'validationIssues',
									].includes( key )
							)
							.map( ( key ) => (
								<li key={ key }>
									<div
										style={ {
											fontWeight: 'bold',
											marginBottom: '2px',
										} }
									>
										{ key }:
									</div>
									<div>
										{ trunc(
											JSON.stringify(
												this.state.block[ key ]
											),
											100
										) }
									</div>
								</li>
							) )
					) : (
						<div>Hover over a block.</div>
					) }
				</ul>
			</PanelBody>
		);
	}
}

export default PeekAttributes;
