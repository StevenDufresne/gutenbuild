import { SKELETON_KEY } from "./keys";

export const updateSettings = () => {
	if ( localStorage.getItem( SKELETON_KEY ) ) {
		document.body.classList.add( 'skeleton-mode' );
	} else {
		document.body.classList.remove( 'skeleton-mode' );
	}
};