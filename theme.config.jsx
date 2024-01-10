import Image from 'next/image';

const themeConfig = {
	logo: (
		<>
			<Image src="/tap-logo.svg" alt="Transfer Agent Protocol" width={48} height={48} />
			<span style={{ marginLeft: '0.4rem', fontWeight: 800 }}>
				Transfer Agent Protocol
			</span>
		</>
	),
	project: {
		link: 'https://github.com/transfer-agent-protocol/tap-cap-table'
	},
	docsRepositoryBase: 'https://github.com/transfer-agent-protocol/docs',
	footer: {
		text: (
			<span>
				Copyright {new Date().getFullYear()} © {' '}
					Alex Palmer, Victor Mimo
			</span>
		)
	}
}

export default themeConfig;
