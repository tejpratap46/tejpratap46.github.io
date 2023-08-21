interface Props {
	children: React.ReactNode
}

const ChatItem = ({ children }: Props) => (
	<p className='mb-4'>
		<span className='px-3 py-1.5 text-gray-800 bg-gray-200 rounded dark:bg-gray-600 dark:text-gray-100 leading-normal'>{children}</span>
	</p>
)

export default ChatItem
