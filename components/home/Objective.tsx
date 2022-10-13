import Section from '@/components/section'

const Objective = () => (
	<Section>
		<p className='text-lg capitalize text-gray-700 dark:text-gray-400'>With a mission...</p>
		<blockquote className='p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800 sm:rounded-2xl transition ease-in-out hover:-translate-y-1 hover:scale-105 delay-150 duration-300'>
			<svg aria-hidden='true' className='w-10 h-10 text-gray-400 dark:text-gray-600' viewBox='0 0 24 27' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z' fill='currentColor' /></svg>
			<p className='text-2xl font-medium leading-relaxed text-gray-900 dark:text-white'>To build something so popular that someday, I can say &quot;Hey, I made that&quot;.</p>
		</blockquote>
	</Section>
)

export default Objective
