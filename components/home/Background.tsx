import Section from '@/components/section'

const Background = () => (
	<Section>
		<div className="px-6">
			<h3 className='text-xl text-gray-400 dark:text-gray-600'><strong>1. ABOUT ME</strong></h3>
			<br />
			<p className='text-gray-900 dark:text-gray-200'>
				Hi! I am a Software Developer from India with a background in Mobile Development, created multiple applications across domains like Medical and Automotive.
			</p>
			<br />
			<p className='text-gray-900 dark:text-gray-200'>
				Currently working with <span className='inline-flex items-center font-semibold text-blue-600 dark:text-blue-400 hover:underline'>Tata Elxsi</span> to build some NexGen Infotainment Systems using Android Automotive.
			</p>
			<br />
			<p className='text-gray-900 dark:text-gray-200'>
				Previously, I had a opportunity to work with a <a href='https://myopd.in' target='_blank' rel='noreferrer' className='inline-flex items-center font-semibold text-blue-600 dark:text-blue-400 hover:underline'>startup</a> that brings technological solutions to medical professionals, helping them to manage their patients and help their patients with easier access for their medical history and scheduling next visits.
			</p>
			<br />
			<p className='text-gray-900 dark:text-gray-200'>
				Throughout my career, I had help created
			</p>
			<ul className='list-none text-gray-900 dark:text-gray-200'>
				<li>- An NexGen Car infotaintment system for a major car OEM.</li>
				<li>- An EMR with capability to work completely offline and yet sync changes across multiple devices.</li>
				<li>- An e-commerce application.</li>
				<li>- An appointment scheduling system.</li>
				<li>- … And multiple apps in Infotainment system that we cannot discuss yet.</li>
			</ul>
		</div>
	</Section>
)

export default Background
