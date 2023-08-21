import Page from '@/components/page'
import Section from '@/components/section'
import { Root } from '@/components/blog/IBlog'
import BlogList from '@/components/blog/BlogList'

const Blog = (root: Root) => {

	return (
		<Page>
			<Section>
				<h3 className='text-xl text-gray-400 dark:text-gray-600 capitalize'><strong>BLOG</strong></h3>
				<p className='text-gray-700 dark:text-gray-400'>Here are some of thoughts and learnings:</p>
				<br />
				<BlogList root={root} limitBy={100}  />
			</Section>
		</Page>
	)
}

export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.tejpratapsingh.com%2Frss.xml`)
	const feed: Root = await res.json() as Root

	// Pass data to the page via props
	return { props: { feed } }
}

export default Blog
