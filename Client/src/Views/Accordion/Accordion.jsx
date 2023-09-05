import { useState } from 'react';
import AccItem from './AccItem';

const faqs = [
	{
		title: 'Como Funciona DoggyGo?',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
	},
	{
		title: 'Como agendo un paseo?',
		text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
	},
	{
		title: 'Como me registro como paseador?',
		text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
	},
];

export default function Accordion() {
	const [activeIndex, setActiveIndex] = useState(null);

	return (
		<div className="w-4/6 flex flex-col gap-3">
			{faqs.map((faq, index) => (
				<AccItem
					key={index}
					title={faq.title}
					text={faq.text}
					number={index}
					activeIndex={activeIndex}
					onActive={setActiveIndex}
				/>
			))}
		</div>
	);
}
