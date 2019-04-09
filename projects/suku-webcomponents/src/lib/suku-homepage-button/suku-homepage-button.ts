export class SukuHomepageButton {
	title: string;
	icon: string;
	path: string;
	disabled: boolean;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
