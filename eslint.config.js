import antfu from '@antfu/eslint-config'

export default antfu({
	ignores: [
		'.jj/',
		'project.inlang/',
		'srcparaglide/',
		'src/scripts/',
		'src/generated/',
		'src/paraglide/',
	],
	stylistic: {
		indent: 'tab',
		quotes: 'single',
		semi: false,
	},
	formatters: true,
	astro: true,
	typescript: true,
	rules: {
		'node/prefer-global/process': 'off',
	},
})
