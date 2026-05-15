import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Page from '@/components/page'

const experiences = [
	{
		period: 'Sept 2023 — Present',
		role: 'Assistant Manager',
		company: 'Renault Nissan Tech and Business Center India',
		description: 'Building next-generation Android Automotive infotainment experiences and in-car HMI systems.',
	},
	{
		period: 'March 2022 — Sept 2023',
		role: 'Specialist',
		company: 'Tata Elxsi',
		description: 'Developed core EV HMI apps such as Car Home, Theme Manager, and Popup Manager.',
	},
	{
		period: 'July 2015 — March 2022',
		role: 'Member of Technical Staff',
		company: 'Catalyze Systems',
		description: 'Built offline-first healthcare SaaS, appointment workflows, and patient-facing products at scale.',
	},
]

const skills = ['Android', 'Kotlin', 'Java', 'React', 'Next.js', 'Node.js', 'Android Automotive', 'SQLite', 'MongoDB', 'AWS']

const projects = [
	{ title: 'MyOPD Zip', description: 'Desktop-like clinic workflows compressed into a mobile experience.', link: 'https://play.google.com/store/apps/details?id=in.myopd.android' },
	{ title: 'MyOPD Appointments', description: 'Seamless appointment booking and patient intake over web.', link: 'https://appointments.myopd.in' },
	{ title: 'AndroidVideoMotion', description: 'On-device programmable video editing toolkit with AI features.', link: 'https://github.com/tejpratap46/AndroidVideoMotion' },
	{ title: 'Link Analytics', description: 'Short links and tracking pixels with actionable analytics.', link: 'https://link.tejpratapsingh.com/' },
]

const Home = () => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) entry.target.classList.add('revealed')
				})
			},
			{ threshold: 0.2 }
		)

		document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
		return () => observer.disconnect()
	}, [])

	return (
		<Page>
			<section className='relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-gradient-to-br from-white to-zinc-50 px-6 py-16 shadow-xl shadow-zinc-300/30 dark:border-zinc-700 dark:from-zinc-900 dark:to-zinc-800 dark:shadow-black/20 sm:px-10'>
				<div className='pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl animate-pulse'></div>
				<div className='pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl animate-float'></div>
				<div className='relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center'>
					<div className='space-y-5'>
						<p className='text-sm uppercase tracking-[0.25em] text-indigo-500'>Software Developer • India</p>
						<h1 className='text-4xl font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl'>Hi, I&apos;m Tej Pratap Singh. I build products that feel fast, useful, and memorable.</h1>
						<p className='max-w-xl text-zinc-600 dark:text-zinc-300'>From healthcare SaaS to modern automotive interfaces, I focus on practical software with strong UX and reliable engineering.</p>
						<div className='flex flex-wrap gap-3 pt-2'>
							<a className='rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-500' href='mailto:tejpratap46@gmail.com'>Let&apos;s connect</a>
							<a className='rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 dark:border-zinc-600' href='https://github.com/tejpratap46' target='_blank' rel='noreferrer'>GitHub</a>
							<a className='rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 dark:border-zinc-600' href='https://www.linkedin.com/in/tejpr' target='_blank' rel='noreferrer'>LinkedIn</a>
						</div>
					</div>
					<div className='justify-self-center rounded-3xl border border-white/30 bg-white/60 p-2 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/70'>
						<Image src='/images/avatar.png' width={280} height={280} alt='Tej Pratap Singh avatar' className='rounded-2xl shadow-2xl shadow-indigo-500/20' priority unoptimized />
					</div>
				</div>
			</section>

			<section className='reveal mt-14 rounded-3xl border border-zinc-200 bg-white p-7 dark:border-zinc-700 dark:bg-zinc-900'>
				<h2 className='text-2xl font-semibold'>Mission</h2>
				<p className='mt-3 text-lg text-zinc-600 dark:text-zinc-300'>To build something so impactful that one day I can proudly say, “Hey, I made that.”</p>
			</section>

			<section className='reveal mt-14'>
				<h2 className='mb-5 text-2xl font-semibold'>Experience</h2>
				<div className='space-y-4'>
					{experiences.map((item) => (
						<article key={item.company} className='rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900'>
							<p className='text-xs uppercase tracking-[0.2em] text-zinc-500'>{item.period}</p>
							<h3 className='mt-2 text-lg font-semibold'>{item.role} · {item.company}</h3>
							<p className='mt-2 text-zinc-600 dark:text-zinc-300'>{item.description}</p>
						</article>
					))}
				</div>
			</section>

			<section className='reveal mt-14'>
				<h2 className='mb-5 text-2xl font-semibold'>Skills</h2>
				<div className='flex flex-wrap gap-3'>
					{skills.map((skill) => <span key={skill} className='rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 dark:border-indigo-600/60 dark:bg-indigo-500/10 dark:text-indigo-300'>{skill}</span>)}
				</div>
			</section>

			<section className='reveal mt-14'>
				<h2 className='mb-5 text-2xl font-semibold'>Featured Work</h2>
				<div className='grid gap-4 sm:grid-cols-2'>
					{projects.map((project) => (
						<a key={project.title} href={project.link} target='_blank' rel='noreferrer' className='group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900'>
							<h3 className='text-lg font-semibold group-hover:text-indigo-500'>{project.title}</h3>
							<p className='mt-2 text-zinc-600 dark:text-zinc-300'>{project.description}</p>
						</a>
					))}
				</div>
			</section>

			<section className='reveal mt-14 mb-8 rounded-3xl border border-zinc-200 bg-zinc-100/70 p-8 text-center dark:border-zinc-700 dark:bg-zinc-800/50'>
				<h2 className='text-2xl font-semibold'>Writing & Notes</h2>
				<p className='mx-auto mt-2 max-w-xl text-zinc-600 dark:text-zinc-300'>I share ideas, experiments, and learnings through blogs and searchable notes.</p>
				<div className='mt-5 flex justify-center gap-3'>
					<Link href='/blog'><a className='rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white dark:bg-zinc-100 dark:text-zinc-900'>Read Blog</a></Link>
					<a href='https://notes.tejpratapsingh.com/_' target='_blank' rel='noreferrer' className='rounded-xl border border-zinc-400 px-4 py-2 text-sm font-semibold'>Open Notes</a>
				</div>
			</section>
		</Page>
	)
}

export default Home
