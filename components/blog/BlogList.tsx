import { Root } from './IBlog'

const BlogList = (props: BlogListProps) => {
	const { root, limitBy } = props
	const { feed } = root
	const { items } = feed
	const filetredItems = items.filter((item, index) => index < limitBy)

	return (
		<>
			{
				filetredItems.map((feedItem, index) => {
					return <a key={feedItem.link} href={feedItem.link} target='_blank' rel='noreferrer' className="block p-4 mt-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
						<h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white"># {index + 1}</h5>
						<h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">{feedItem.title}</h5>
						<p className="font-normal text-gray-700 dark:text-gray-400">{feedItem.pubDate}</p>
					</a>
				})
			}
		</>
	)
}

export default BlogList

export interface BlogListProps {
	root: Root

	limitBy: number
}
