export class SukuHomepageButton {
	title: string;
	icon: string;
	path: string;
	disabled: boolean;
	id: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
