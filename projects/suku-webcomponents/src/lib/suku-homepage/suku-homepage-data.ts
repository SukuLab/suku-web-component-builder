import { SukuHomepageButton } from '../suku-homepage-button/suku-homepage-button';
import { SukuHomepageSection } from '../suku-homepage-section/suku-homepage-section';

export let sukuHomepageData: SukuHomepageSection[] = [
	new SukuHomepageSection({
		header: 'SUKU Core Applications',
		subheader: '',
		info:
			'SUKU Core Applications offer the primary feature set on the SUKU Platform. Click any of the icons below to open that SUKU Core Application.',
		buttons: [
			new SukuHomepageButton({
				title: 'Marketplace',
				icon: 'fas fa-shopping-cart',
				path: '/userDashboard',
				disabled: false,
			}),
			new SukuHomepageButton({
				title: 'Track & Trace',
				icon: 'fas fa-link',
				path: '/productSearch',
				disabled: false,
			}),
			new SukuHomepageButton({
				title: 'Document Authenticator',
				icon: 'far fa-file-code',
				path: '/verify',
				disabled: false,
			}),
			new SukuHomepageButton({
				title: 'Payment Portal',
				icon: 'fas fa-sliders-h',
				path: '/paymentPortal',
				disabled: false,
			}),
		],
	}),
	new SukuHomepageSection({
		header: 'SUKU Applications and Services',
		subheader: '- Coming Soon',
		info:
			'SUKU Applications and Services provide additional functionality and features, which typically leverage the the SUKU Core. We expect these Applications and Services to be built by 3rd parties and by the SUKU Team. These features are coming soon!',
		buttons: [
			new SukuHomepageButton({
				title: 'Inventory Management',
				icon: 'fas fa-box-open',
				path: '/',
				disabled: true,
			}),
			new SukuHomepageButton({
				title: 'Warehouse Management',
				icon: 'fas fa-dolly',
				path: '/',
				disabled: true,
			}),
			new SukuHomepageButton({
				title: 'Insurance',
				icon: 'fas fa-shield-alt',
				path: '/',
				disabled: true,
			}),
			new SukuHomepageButton({
				title: 'Quorum Block Explorer',
				icon: 'fas fa-cubes',
				path: '/',
				disabled: true,
			}),
		],
	}),
];
