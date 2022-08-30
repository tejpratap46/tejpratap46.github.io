import Section from '@/components/section'

const Work = () => (
	<Section>
		<h3 className='text-xl text-gray-400 dark:text-gray-600'><strong>3. WHERE I&apos;VE WORKED</strong></h3>
		<ol className='relative border-l border-gray-200 dark:border-gray-700'>
			<li className='mb-10 ml-4'>
				<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
				<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>March 2022 - Present</time>
				<h3 className='text-lg font-semibold text-gray-700 dark:text-gray-300'>Tata Elxsi</h3>
				<h5 className='text-xs font-semibold text-gray-600 dark:text-gray-400 mb-4'>Specialist</h5>
				<p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-100'>
					Building Automotive Infotaintment Systems for Modern Cars with Android Automotive.
					<br />
					<span className='text-sm'>- Create, Build and Deploy Apps on Automotive AOSP images.</span>
				</p>
			</li>
			<li className='mb-10 ml-4'>
				<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
				<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>July 2015 - March 2022</time>
				<h3 className='text-lg font-semibold text-gray-700 dark:text-gray-300'>Catalyze Systems Pvt. Ltd.</h3>
				<h5 className='text-xs font-semibold text-gray-600 dark:text-gray-400 mb-4'>Member Of tech Staff</h5>
				<p className='text-base font-normal text-gray-500 dark:text-gray-100'>
					Building SAAS for Medical Professionals, Helping them to manage their Clinic and Patients.
					<br />
					<span className='text-sm'>- Create, Build and Deploy our flagship product on Android Play Store and Apple App Store.</span>
					<br />
					<span className='text-sm'>- Crafted distributed, Offline First apps that can always be in-sync and can scale to thousands of users.</span>
					<br />
					<span className='text-sm'>- Launched web application to allow patients a frictionless appointment scheduling.</span>
					<br />
					<span className='text-sm'>- Worked with multiple Payment API&apos;s RazerPay, CitrusPay, Instamojo, Google Play, Apple Store Kit to name a few.</span>

				</p>
				<a href='https://myopd.in' target='_blank' className='mt-4 inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700' rel="noreferrer">Learn more <svg className='ml-2 w-3 h-3' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z' clipRule='evenodd'></path></svg></a>
			</li>
		</ol>
	</Section>
)

export default Work
