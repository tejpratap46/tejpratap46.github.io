import Page from '@/components/page'
import Section from '@/components/section'
import Image from 'next/image'

const Index = () => (
	<Page>
		<Section>
			<div className='grid h-screen-safe place-items-center'>
				<div className='w-full max-w-sm rounded-lg'>
					<div className='flex flex-col items-center p-10'>
						<Image className='mb-3 w-24 h-24 rounded-full shadow-lg' src={'/images/avatar.png'} width={220} height={220} alt='Bonnie image' />
						<h4 className='mb-1 mt-8 text-2xl font-medium text-gray-900 dark:text-white'>Tej Pratap Singh</h4>
						<span className='text-sm text-gray-500 dark:text-gray-400'>Software Developer</span>
						<div className='flex mt-4 space-x-3 md:mt-6'>
							<a href='mailto:tejpratap46@gmail.com'
								target='_blank'
								rel='noreferrer'
								className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'>
								<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
									<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
									<rect x='3' y='5' width='18' height='14' rx='2'></rect>
									<polyline points='3 7 12 13 21 7'></polyline>
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
					</div>
				</div>
			</div>
		</Section>
		<Section>
			<blockquote className='p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800'>
				<svg aria-hidden='true' className='w-10 h-10 text-gray-400 dark:text-gray-600' viewBox='0 0 24 27' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z' fill='currentColor' /></svg>
				<p className='text-2xl font-medium leading-relaxed text-gray-900 dark:text-white'>To build something so popular that someday, i can say &quot;Hey, i made that&quot;.</p>
			</blockquote>
		</Section>
		<br />
		<Section>
			<h3 className='text-xl text-gray-400 dark:text-gray-600'><strong>BACKGROUND</strong></h3>
			<br />
			<p className='text-gray-900 dark:text-gray-200'>
				Hi! I'm a Software Developer from India with a background in Mobile Development, created multiple applications accross domains like Medical and Car Infotaintment.
			</p>
			<br />
			<p className='text-gray-900 dark:text-gray-200'>
				Currently working with <strong>TATA ELXSI</strong> to build some NextGen Infotaintment Systems using Android Automotive.
			</p>
			<br />
			<p className='text-gray-900 dark:text-gray-200'>
				Previously, i had a opportunity to wotk with a <a href="https://myopd.in" target='_blank' rel="noreferrer">startup</a> to bring technological solutions to medical professionals, helping them to manage their patients and help their patients with easier access for their medical history and scheduling next visits.
			</p>
			<br />
			<p className='text-gray-900 dark:text-gray-200'>
				Throughout my career, i had help created
			</p>
			<ul className='list-none text-gray-900 dark:text-gray-200'>
				<li>- An EMR with capability to work completely offline and yet sync changes accross multiple devices.</li>
				<li>- An e-commarse application.</li>
				<li>- An appointment scheduling system.</li>
				<li>- ... And multiple apps in Infotaintment system</li>
			</ul>
		</Section>
		<br />
		<Section>
			<h3 className='text-xl text-gray-400 dark:text-gray-600'><strong>SKILLS</strong></h3>
		</Section>
	</Page>
)

export default Index
