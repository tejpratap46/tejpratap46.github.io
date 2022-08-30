import Page from '@/components/page'
import Hero from '@/components/home/Hero'
import Objective from '@/components/home/Objective'
import Background from '@/components/home/Background'
import Skills from '@/components/home/Skills'
import Work from '@/components/home/Work'
import Projects from '@/components/home/Projects'

const Index = () => (
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
	</Page>
)

export default Index
