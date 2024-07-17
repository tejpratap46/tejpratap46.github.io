import Section from '@/components/section'

const projectList = [
	{
		name: 'MyOPD Zip',
		image: '/images/myopd_zip_frame.png',
		description: 'Power of MyOPD desktop suite compressed for mobile.',
		urls: [{
			name: 'Play Store',
			url: 'https://play.google.com/store/apps/details?id=in.myopd.android'
		}]
	},
	{
		name: 'MyOPD Appointments',
		image: '/images/myopd_appointments_frame.png',
		description: 'Book appointments online with ease via MyOPD.',
		urls: [{
			name: 'Web',
			url: 'https://appointments.myopd.in'
		}]
	}
]

const libProjectList = [
	{
		name: 'PDFCreator Android',
		description: 'A simple library to create and view PDF with zero dependency Or native code.',
		urls: [{
			name: 'Github',
			url: 'https://github.com/tejpratap46/PDFCreatorAndroid'
		}]
	},
	{
		name: 'RecyclerCalendar Android',
		description: 'A simple DIY library to generate your own custom Calendar View using RecyclerView, written in Kotlin',
		urls: [{
			name: 'Github',
			url: 'https://github.com/tejpratap46/RecyclerCalendarAndroid'
		}]
	},
	{
		name: 'Google-Drive-REST-Android',
		description: 'A simple wrapper around Google Drive REST API using OKHTTP.',
		urls: [{
			name: 'Github',
			url: 'https://github.com/tejpratap46/Google-Drive-REST-Android'
		}]
	},
	{
		name: 'AndroidViewAnimator',
		description: 'Easily animate any view with complete control on each view. Written in kotlin',
		urls: [{
			name: 'Github',
			url: 'https://github.com/tejpratap46/AndroidViewAnimator'
		}]
	}
]

const sideProjectList = [
	{
		name: 'Link Analytics',
		description: 'Create a short link and track its analytics. Links can be a simple URL shortener with analytics or Pixel tracker for images.',
		urls: [{
			name: 'Shorten A Link',
			url: 'https://link.tejpratapsingh.com/'
		}]
	},
	{
		name: 'Wake You',
		description: 'Keep your system awake, don\'t let it sleep with a simple Web App.',
		urls: [{
			name: 'Digital Clock',
			url: 'https://wake.tejpratapsingh.com/'
		}, {
			name: 'Text Clock',
			url: 'https://wake.tejpratapsingh.com/word'
		}, {
			name: 'Globe',
			url: 'https://wake.tejpratapsingh.com/globe'
		}, {
			name: 'Vertical Clock',
			url: 'https://wake.tejpratapsingh.com/vertical'
		}]
	},
	{
		name: 'Video Toolkit',
		description: 'Simple video player with slow-motion capability to analyze every frame of video.',
		urls: [{
			name: 'Analyze Your Video',
			url: 'https://video.tejpratapsingh.com/'
		}]
	},
	{
		name: 'Mockup Generator',
		description: 'Your screenshots can do more.',
		urls: [{
			name: 'Build Your mockup',
			url: 'https://mockup.tejpratapsingh.com/'
		}]
	}
]

const Projects = () => (
	<Section>
		<div className="px-6">
			<h3 className='text-xl text-gray-400 dark:text-gray-600 capitalize'><strong>4. SOME THINGS I&apos;VE BUILD </strong></h3>
			<br />
			{/* PROJECTS */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
				{
					projectList.map((project) => {
						return <div key={project.name} className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
							<div className='bg-cover bg-top shadow-inner'
								style={{
									height: 300,
									backgroundImage: `url(${project.image})`,
								}}></div>
							<div className='p-5'>
								<a>
									<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{project.name}</h5>
								</a>
								<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{project.description}</p>
								{
									project.urls.map((item, index) => {
										return <a key={index} href={item.url} target='_blank' rel='noreferrer' className='inline-flex items-center py-2 px-3 mx-2 my-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
											<span>{item.name}</span>
											<svg aria-hidden='true' className='ml-2 -mr-1 w-4 h-4' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
										</a>
									})
								}
							</div>
						</div>
					})
				}
			</div>
			<br />
			<br />
			<h4 className='text-l text-gray-400 dark:text-gray-600 capitalize'><strong>## OPEN SOURCE LIBRARIES </strong></h4>
			<br />
			{/* LIB PROJECTS PROJECTS */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
				{
					libProjectList.map((project) => {
						return <div key={project.name} className='p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
							<a>
								<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{project.name}</h5>
							</a>
							<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{project.description}</p>
							<div style={{display: 'grid'}}>
							{
								project.urls.map((item, index) => {
									return <a key={index} href={item.url} target='_blank' rel='noreferrer' className='inline-flex items-center py-2 px-3 mx-2 my-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
										<span>{item.name}</span>
										<svg aria-hidden='true' className='ml-2 -mr-1 w-4 h-4' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
									</a>
								})
							}
							</div>
						</div>
					})
				}
			</div>
			<br />
			<br />
			<h4 className='text-l text-gray-400 dark:text-gray-600 capitalize'><strong>## SIDE PROJECTS </strong></h4>
			<br />
			{/* SIDE PROJECTS */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
				{
					sideProjectList.map((project) => {
						return <div key={project.name} className='p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
							<a>
								<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{project.name}</h5>
							</a>
							<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{project.description}</p>
							<div style={{display: 'grid'}}>
							{
								project.urls.map((item, index) => {
									return <a key={index} href={item.url} target='_blank' rel='noreferrer' className='inline-flex items-center py-2 px-3 mx-2 my-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
										<span>{item.name}</span>
										<svg aria-hidden='true' className='ml-2 -mr-1 w-4 h-4' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
									</a>
								})
							}
							</div>
						</div>
					})
				}
			</div>
		</div>
	</Section>
)

export default Projects
