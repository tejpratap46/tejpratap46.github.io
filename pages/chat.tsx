import Page from '@/components/page'
import Section from '@/components/section'
import ChatItem from '@/components/chat/chat-text'
import ChatHead from '@/components/chat/chat-head'
import ChatBox from '@/components/chat/chat-box'
import Image from 'next/image'

const Chat = () => {
	return (
		<Page>
			<Section>
				<ChatItem>Hey there.</ChatItem>
				<ChatItem>
					<span>Tej Pratap here, a developer from India </span>
					<Image className='rounded' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAe1BMVEX/mTMSiAf/////lir/t317rHoAhQD29vr6+vwAAHbj4+4AAHvc3OoAAIKvr9AAAIbw8PbNzd6Hh7ZnZ6eTk7ugoMK6utTHx91gYKPV1eebm8K0tNOOjrmQkL9TU52amsYdHYgKCognJ4w/P5Q6OpZ9fbJ3d7FNTZ2jo8snHJxTAAABfklEQVRoge2W227DIAxAM+8CGEKdhIaSpEnbXZr//8KxdpumXbRsAm0PPooEPOQI2RhTFAzDMAzDMAzzF1xmpLjKSAEZ+TdyMiEYkUMu2nFXKlXuxnaxf6m8P6jbbeN9s71Vhz6pXG500yEBxQ+7Rm9kOrm8KzckIEhEGUDQprxbFJpF8rH0EjwENAZDnEhfHlPJO91ABdRSH0Ifh7hodJdGTvqeQFqYcaiqAWewEuheUxJ5p1ryQjist+v1tkYnhKdWLdj6Avl+JBC2N/Vwoja9FUDjPoUclcVYmKbu3BRxXR0XBq3CBHKvaxDGusnND6vVw+ymwcZLoNY+gbxXSGhCtXbTKjK5dRU3Tqi+r9MfyIezfOgSyl/DMkxPYYlDwrCgfk6oOyfUpUzou6Pokh5FcJ8XkUsi/1D+c8Lyz3pxARwzXrl5m8Wpzc0vbW5O2+Yi9m2Dtgt/+hdPi5M/26PoN+SVX2ekuMlIcZERlrOc5SxnOctZznKWs/wrHgGarkZgBp7eVAAAAABJRU5ErkJggg==" height={15} width={15} alt='India Flag' />
					<span> .</span>
				</ChatItem>
				<ChatItem>I have a mission in life.</ChatItem>
				<ChatItem>To build something so popular that someday, I can say &quot;hey, I made that&quot;.</ChatItem>

				<ChatHead>3 min ago</ChatHead>

				<ChatItem>I have a background in Mobile Development, created multiple applications across domains like Medical and Automotive.</ChatItem>


				<ChatItem>Currently working with Tata Elxsi to build some NexGen infotainment Systems using Android Automotive.</ChatItem>
				<ChatItem>Previously, I had a opportunity to work with a startup that brings technological solutions to medical professionals, helping them to manage their patients and help their patients with easier access for their medical history and scheduling next visits.</ChatItem>
				<ChatItem>Throughout my career, I had help created:</ChatItem>
				<ChatItem>- An NexGen Car infotainment system for a major car OEM.</ChatItem>
				<ChatItem>- An EMR with capability to work completely offline and yet sync changes across multiple devices.</ChatItem>
				<ChatItem>- An e-commerce application.</ChatItem>
				<ChatItem>- An appointment scheduling system.</ChatItem>
				<ChatItem>- … And multiple apps in Infotainment system that we cannot discuss yet.</ChatItem>

				<ChatHead>2 min ago</ChatHead>
			</Section>

			<div className='p-60' />

			<ChatBox />
		</Page>
	)
}

export default Chat
