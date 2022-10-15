export interface Root {
	status: string
	feed: Feed
}

export interface Feed {
	url: string
	title: string
	link: string
	author: string
	description: string
	image: string
	items: Item[]
}

export interface Item {
	title: string
	pubDate: string
	link: string
	guid: string
	author: string
	thumbnail: string
	description: string
	content: string
	enclosure: Enclosure
	categories: any[]
}

export interface Enclosure { }
