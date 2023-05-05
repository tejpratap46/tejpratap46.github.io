import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Meta from '@/components/meta'
import '@/styles/globals.css'
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
	ssr: false
});

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			disableTransitionOnChange
		>
			<Meta />
			<AnimatedCursor
				innerSize={16}
				outerSize={16 * 3}
				color='255, 255, 255'
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={3} />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
