import Image from "next/image"
interface Props {
	children: React.ReactNode
}

const ChatHead = ({ children }: Props) => (
	<div className="flex items-center space-x-4 my-8">
		<Image className='w-10 h-10 rounded-full' src='/images/avatar.png' width={30} height={30} alt='Rounded avatar' />
		<span className='font-normal text-gray-500 dark:text-gray-400'>{children}</span>
	</div>
)

export default ChatHead
