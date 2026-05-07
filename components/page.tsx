import Head from 'next/head'
import Appbar from '@/components/appbar'
import BottomNav from '@/components/bottom-nav'

const SITE_NAME = 'Tej Pratap Singh'
const SITE_URL = 'https://tejpratapsingh.com'
const DEFAULT_DESCRIPTION =
	'Software developer specializing in web and mobile applications, with experience in automotive infotainment and healthcare technology.'
const DEFAULT_IMAGE = '/images/avatar.png'

interface Props {
	title?: string
	description?: string
	path?: string
	image?: string
	noindex?: boolean
	children: React.ReactNode
}

const Page = ({
	title,
	description = DEFAULT_DESCRIPTION,
	path = '/',
	image = DEFAULT_IMAGE,
	noindex = false,
	children,
}: Props) => {
	const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
	const canonical = new URL(path, SITE_URL).toString()
	const fullImage = new URL(image, SITE_URL).toString()

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name='description' content={description} />
				<link rel='canonical' href={canonical} />
				<meta name='robots' content={noindex ? 'noindex, nofollow' : 'index, follow'} />

				<meta property='og:type' content='website' />
				<meta property='og:site_name' content={SITE_NAME} />
				<meta property='og:title' content={pageTitle} />
				<meta property='og:description' content={description} />
				<meta property='og:url' content={canonical} />
				<meta property='og:image' content={fullImage} />

				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content={pageTitle} />
				<meta name='twitter:description' content={description} />
				<meta name='twitter:image' content={fullImage} />
			</Head>

			<Appbar />

			<main
				/**
				 * Padding top = `appbar` height
				 * Padding bottom = `bottom-nav` height
				 */
				className='mx-auto max-w-screen-md pt-20 pb-16 px-safe sm:pb-0'
			>
				<div>{children}</div>
			</main>

			<BottomNav />
		</>
	)
}

export default Page
