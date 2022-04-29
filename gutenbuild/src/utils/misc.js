export const trunc = ( str, charMax ) => {
	if ( str.length > charMax ) {
		return str.slice( 0, charMax ) + '...';
	} else {
		return str;
	}
};
