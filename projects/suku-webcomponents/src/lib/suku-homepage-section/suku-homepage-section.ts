import { SukuHomepageButton } from '../suku-homepage-button/suku-homepage-button';

export class SukuHomepageSection {
	header: string;
	subheader: string;
	info: string;
	buttons: SukuHomepageButton[];

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
