import Section from '@/components/section'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'

const Skills = () => (
	<Section>
		<h3 className='text-xl text-gray-400 dark:text-gray-600'><strong>SKILLS</strong></h3>
		<br />
		<div className="grid grid-cols-4">
			<ul>
				<p className='text-base font-light'>FRONTEND</p>
				<br />
				<li>
					<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Android</span></p>
				</li>
				<li>
					<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;iOS</span></p>
				</li>
				<li>
					<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Reactjs</span></p>
				</li>
				<li>
					<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Flutter</span></p>
				</li>
			</ul>

			<ul>
				<p className='text-base font-light'>BACKEND</p>
				<br />
				<li>
					<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Nodejs</span></p>
				</li>
				<li>
					<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;AppEngine</span></p>
				</li>
				<li>
					<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;AWS</span></p>
				</li>
				<li>
					<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Cloud Functions</span></p>
				</li>
			</ul>

			<ul>
				<p className='text-base font-light'>LANGUAGES</p>
				<br />
				<li>
					<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Java</span></p>
				</li>
				<li>
					<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Kotlin</span></p>
				</li>
				<li>
					<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Swift</span></p>
				</li>
				<li>
					<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Javascript</span></p>
				</li>
			</ul>

			<ul>
				<p className='text-base font-light'>Databases</p>
				<br />
				<li>
					<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;SQLite</span></p>
				</li>
				<li>
					<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;Realm</span></p>
				</li>
				<li>
					<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;CoreData</span></p>
				</li>
				<li>
					<p className="inline-flex text-sm"><CheckBadgeIcon width={20} /><span>&nbsp;MongoDB</span></p>
				</li>
			</ul>
		</div>
	</Section>
)

export default Skills
