import Section from '@/components/section'
import Image from 'next/image'

const Projects = () => (
	<Section>
		<h3 className='text-xl text-gray-400 dark:text-gray-600 capitalize'><strong>4. SOME THINGS I&apos;VE BUILD </strong></h3>
		<br />
		<div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
			<div className='bg-cover bg-center shadow-inner dark:bg-zinc-800 grayscale hover:filter-none transition ease-in-out duration-500'
				style={{
					height: 300,
					width: '50%',
					backgroundImage:
						'url(/images/myopdzip.webp)',
				}}></div>
			<div className='p-5'>
				<a href='#'>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>MyOPD Zip</h5>
				</a>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Power of MyOPD desktop suite compressed for mobile.</p>
				<a href='#' className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
					Read more
					<svg aria-hidden='true' className='ml-2 -mr-1 w-4 h-4' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
				</a>
			</div>
		</div>

	</Section>
)

export default Projects