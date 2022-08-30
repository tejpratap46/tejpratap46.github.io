import Section from '@/components/section'
import Image from 'next/image'

const Hero = () => (
	<Section>
		<div className='grid h-screen-safe place-items-center'>
			<div className='w-full max-w-sm rounded-lg'>
				<div className='flex flex-col items-center p-10'>
					<Image className='mb-3 w-24 h-24 rounded-full shadow-lg grayscale hover:filter-none transition ease-in-out duration-500' src={'/images/avatar.png'} width={220} height={220} alt='Bonnie image' />
					<h4 className='mb-1 mt-8 text-2xl font-medium text-gray-900 dark:text-white'>Tej Pratap Singh</h4>
					<span className='text-sm text-gray-500 dark:text-gray-400'>Software Developer</span>
					<span className='text-sm text-gray-800 dark:text-gray-200'>Specialist @Tata Elxsi</span>
					<div className='flex mt-4 space-x-3 md:mt-6'>
						<a href='mailto:tejpratap46@gmail.com'
							target='_blank'
							rel='noreferrer'
							className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'>
							<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-at" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<circle cx="12" cy="12" r="4"></circle>
								<path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
							</svg>
						</a>
						<a href='https://github.com/tejpratap46'
							target='_blank'
							rel='noreferrer'
							className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'>
							<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
								<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
								<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
							</svg>
						</a>
						<a href='https://twitter.com/_tejpratap'
							target='_blank'
							rel='noreferrer'
							className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'>
							<svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-brand-twitter' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
								<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
								<path d='M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z'></path>
							</svg>
						</a>
						<a href='https://blog.tejpratapsingh.com'
							target='_blank'
							rel='noreferrer'
							className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'>
							<svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-book' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
								<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
								<path d='M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0'></path>
								<path d='M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0'></path>
								<line x1='3' y1='6' x2='3' y2='19'></line>
								<line x1='12' y1='6' x2='12' y2='19'></line>
								<line x1='21' y1='6' x2='21' y2='19'></line>
							</svg>
						</a>
					</div>
					<br />
					<a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-align-justified" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<line x1="4" y1="6" x2="20" y2="6"></line>
							<line x1="4" y1="12" x2="20" y2="12"></line>
							<line x1="4" y1="18" x2="16" y2="18"></line>
						</svg>
						<span>&nbsp;RESUME</span>
					</a>
				</div>
			</div>
		</div>
	</Section>
)

export default Hero
