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
				path: '/marketplaceDashboard',
				disabled: false,
				id: 'Marketplace'
			}),
			new SukuHomepageButton({
				title: 'Track & Trace',
				icon: 'fas fa-link',
				path: '/productSearch',
				disabled: false,
				id: 'trackAndTrace'
			}),
			new SukuHomepageButton({
				title: 'Document Authenticator',
				icon: 'far fa-file-code',
				path: '/documentAuth',
				disabled: false,
				id: 'documentAuthenticator'
			}),
			new SukuHomepageButton({
				title: 'Payment Portal',
				icon: 'fas fa-sliders-h',
				path: '/paymentPortal',
				disabled: false,
				id: 'paymentPortal'
			}),
			new SukuHomepageButton({
				title: 'Governance',
				icon: 'fas fa-landmark',
				path: '/governance',
				disabled: false,
				id: 'governance'
			})
		]
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
				id: 'inventoryManagement'
			}),
			new SukuHomepageButton({
				title: 'Warehouse Management',
				icon: 'fas fa-dolly',
				path: '/',
				disabled: true,
				id: 'warehouseManagement'
			}),
			new SukuHomepageButton({
				title: 'Insurance',
				icon: 'fas fa-shield-alt',
				path: '/',
				disabled: true,
				id: 'insurance'
			}),
			new SukuHomepageButton({
				title: 'Quorum Block Explorer',
				icon: 'fas fa-cubes',
				path: '/',
				disabled: true,
				id: 'quorumBlockExplorer'
			}),
			new SukuHomepageButton({
				title: 'Dummy',
				icon: 'fas fa-plus',
				path: '/',
				disabled: null,
				id: 'dummy'
			})
		]
	})
];