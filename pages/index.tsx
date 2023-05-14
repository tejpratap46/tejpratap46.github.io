import Link from 'next/link'
import Marquee from 'react-fast-marquee'

import Page from '@/components/page'
import Hero from '@/components/home/Hero'
import Objective from '@/components/home/Objective'
import Background from '@/components/home/Background'
import Skills from '@/components/home/Skills'
import Work from '@/components/home/Work'
import Projects from '@/components/home/Projects'

const Index = () => {

	return (
		<div>
			<Marquee className='dark:text-zinc-800' style={{ zIndex: -1, position: 'absolute', fontSize: '40em', width: '99vw', opacity: '0.2' }} gradient={false} speed={100}>TEJ PRATAP SINGH•</Marquee>
			<Page>
				<Hero />
				<br />
				<Objective />
				<br />
				<Background />
				<br />
				<hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
				{/* <p className='text-xl text-center text-gray-300 dark:text-gray-700'>----------||----------</p> */}
				<Skills />
				<hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
				{/* <p className='text-xl text-center text-gray-300 dark:text-gray-700'>----------||----------</p> */}
				<Work />
				<hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
				<Projects />
				<hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
				<h3 className='text-xl text-gray-400 dark:text-gray-600 capitalize'><strong>BLOG</strong></h3>
				<p className='text-gray-700 dark:text-gray-400'>Here are some of thoughts and learnings:</p>
				<br />
				<Link href='/blog'>
					<a className="block p-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
						<h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">##</h5>
						<h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Blogs</h5>
						<p className="font-normal text-gray-700 dark:text-gray-400">I occasionally write blogs of my findings and learnings, few that is publish and keep hundreds of them in draft.</p>
					</a>
				</Link>
			</Page>
		</div>
	)
}

export default Index
