import React from 'react'

import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

import '../styles/global.css'

// decorators
export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<Story />
		</ThemeProvider>
	),
]

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}
