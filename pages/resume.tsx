const Resume = () => (
	<main
		className='mx-auto max-w-screen-md pt-8 pb-8 px-safe sm:pb-0'
	>
		<h1 className="text-4xl font-serif font-medium">Tej Pratap Singh</h1>
		<h5 className="text-lg mt-3">Web and Mobile App Developer</h5>

		<nav className="flex mt-2">
			<ol className="inline-flex items-center space-x-1 md:space-x-3">
				<li className="inline-flex items-center">
					<a href="mailto:tejpratap46@gmail.com" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
							<path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
						</svg>
						tejpratap6@gmail.com
					</a>
				</li>

				<li className="inline-flex items-center">
					<a href="tel:+919762352704" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
							<path d="M15 7a2 2 0 0 1 2 2"></path>
							<path d="M15 3a6 6 0 0 1 6 6"></path>
						</svg>
						+91-(976)235-2704
					</a>
				</li>

				<li className="inline-flex items-center">
					<a href="https://me.tejpratapsingh.com" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
							<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
							<path d="M10 12h4v4h-4z"></path>
						</svg>
						tejpratapsingh.com
					</a>
				</li>
			</ol>
		</nav>

		<div className="grid grid-cols-3 gap-4 mt-8">
			<div className="col-span-2">
				<h3 className="text-2xl">Relavent Experience</h3>
				<br />
				<p>
					<strong>Specialist</strong>
					<span> @ TATA Elxsi</span>
				</p>
				<p>
					<small>2022 - Present // Pune, Maharashtra</small>
				</p>
				<ul>
					<li>Building Automotive Infotainment Systems for Modern Cars with Android Automotive.</li>
					<li>Building Automotive Infotainment Systems for Modern Cars with Android Automotive.</li>
				</ul>
			</div>
			<div className="">
				<h3 className="text-2xl">Skills</h3>
				<br />
			</div>
		</div>
	</main>
)

export default Resume
