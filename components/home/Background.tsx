import Section from '@/components/section'

const Background = () => (
	<Section>
		<h3 className='text-xl text-gray-400 dark:text-gray-600'><strong>1. ABOUT ME</strong></h3>
		<br />
		<p className='text-gray-900 dark:text-gray-200'>
			Hi! Iam a Software Developer from India with a background in Mobile Development, created multiple applications accross domains like Medical and Car Infotaintment.
		</p>
		<br />
		<p className='text-gray-900 dark:text-gray-200'>
			Currently working with <span className='inline-flex items-center font-semibold text-blue-600 dark:text-blue-400 hover:underline'>Tata Elxsi</span> to build some NextGen Infotaintment Systems using Android Automotive.
		</p>
		<br />
		<p className='text-gray-900 dark:text-gray-200'>
			Previously, i had a opportunity to work with a <a href='https://myopd.in' target='_blank' rel='noreferrer' className='inline-flex items-center font-semibold text-blue-600 dark:text-blue-400 hover:underline'>startup</a> that brings technological solutions to medical professionals, helping them to manage their patients and help their patients with easier access for their medical history and scheduling next visits.
		</p>
		<br />
		<p className='text-gray-900 dark:text-gray-200'>
			Throughout my career, i had help created
		</p>
		<ul className='list-none text-gray-900 dark:text-gray-200'>
			<li>- An EMR with capability to work completely offline and yet sync changes accross multiple devices.</li>
			<li>- An e-commarse application.</li>
			<li>- An appointment scheduling system.</li>
			<li>- ... And multiple apps in Infotaintment system that we cannot discuss</li>
		</ul>
	</Section>
)

export default Background
