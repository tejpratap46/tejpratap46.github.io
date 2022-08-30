import Section from '@/components/section'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

const Skills = () => (
	<Section>
		<h3 className='text-xl text-gray-400 dark:text-gray-600 capitalize'><strong>2. THINGS I&apos;VE LEARNED </strong></h3>
		<p className='text-gray-700 dark:text-gray-400'>Here are most of the technologies i have used in past:</p>
		<br />
		<div className="overflow-x-auto relative sm:rounded-lg">
			<table className="w-full text-sm text-left text-gray-800 dark:text-gray-100">
				<thead className="text-base text-gray-900 uppercase dark:text-gray-100">
					<tr>
						<th scope="col" className="py-1">
							FRONTEND
						</th>
						<th scope="col" className="py-1">
							BACKEND
						</th>
						<th scope="col" className="py-1">
							LANGUAGES
						</th>
						<th scope="col" className="py-1">
							DATABASES
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td scope="row" className="py-1">
							<span className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Android</span></span>
						</td>
						<td className="py-1">
							<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Nodejs</span></p>
						</td>
						<td className="py-1">
							<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Java</span></p>
						</td>
						<td className="py-1">
							<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;SQLite</span></p>
						</td>
					</tr>
					<tr>
						<td scope="row" className="py-1">
							<span className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;iOS</span></span>

						</td>
						<td className="py-1">
							<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;AppEngine</span></p>
						</td>
						<td className="py-1">
							<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Kotlin</span></p>
						</td>
						<td className="py-1">
							<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Realm</span></p>
						</td>
					</tr>
					<tr>
						<td scope="row" className="py-1">
							<span className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Reactjs</span></span>

						</td>
						<td className="py-1">
							<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;AWS</span></p>
						</td>
						<td className="py-1">
							<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Swift</span></p>
						</td>
						<td className="py-1">
							<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;CoreData</span></p>
						</td>
					</tr>
					<tr>
						<td scope="row" className="py-1">
							<span className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Flutter</span></span>
						</td>
						<td className="py-1">
							<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Cloud Functions</span></p>
						</td>
						<td className="py-1">
							<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Javascript</span></p>
						</td>
						<td className="py-1">
							<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;MongoDB</span></p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<br />
	</Section>
)

export default Skills
