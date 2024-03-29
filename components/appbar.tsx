import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
	{ label: 'Blog', href: '/blog' },
]

const Appbar = () => {
	const router = useRouter()

	return (
		<div className='fixed top-0 left-0 z-20 w-full bg-zinc-900 pt-safe'>
			<header className='border-b bg-zinc-100 px-safe dark:border-zinc-800 dark:bg-zinc-900'>
				<div className='mx-auto flex h-20 max-w-screen-md items-center justify-between px-6'>
					<Link href='/'>
						<a>
							<h1 className='text-2xl font-medium font-serif'>Tej Pratap Singh</h1>
						</a>
					</Link>

					<nav className='flex items-center space-x-6'>
						<div className='hidden sm:block'>
							<div className='flex items-center space-x-6'>
								{links.map(({ label, href }) => (
									<Link key={label} href={href}>
										<a
											className={`text-sm ${
												router.pathname === href
													? 'text-indigo-500 dark:text-indigo-400'
													: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
											}`}
										>
											{label}
										</a>
									</Link>
								))}
							</div>
						</div>

						<div
							className='h-10 w-10 rounded-full bg-zinc-200 bg-cover bg-center shadow-inner dark:bg-zinc-800'
							onClick={() => {
								const darkMode = 'dark';
								if (document.documentElement.classList.contains(darkMode)) {
									document.documentElement.classList.remove(darkMode)
								} else {
									document.documentElement.classList.add(darkMode)
								}
							}}
							style={{
								backgroundImage:
									'url(/images/favicon.png)',
							}}
						/>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Appbar
