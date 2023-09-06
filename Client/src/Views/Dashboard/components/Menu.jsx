import { Link } from 'react-router-dom';

export const menu = [
	{
		id: 1,
		title: 'main',
		listItems: [
			{
				id: 1,
				title: 'Home',
				url: '/dash',
				icon: '/home.svg',
			},
			{
				id: 2,
				title: 'Perfil',
				url: '/dash/profile',
				icon: '/profile.svg',
			},
			{
				id: 3,
				title: 'History',
				url: '/dash/history',
				icon: '/log.svg',
			},
		],
	},
];

const Menu = () => {
	return (
		<div className="">
			{menu.map((item) => (
				<div className="flex flex-col gap-3 mb-5" key={item.id}>
					<span className="text-xl font-bold  text-slate-50 capitalize">
						{item.title}
					</span>
					{item.listItems.map((list) => (
						<Link
							key={list.id}
							className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-slate-700"
							to={list.url}
						>
							<img src={list.icon} alt="" />
							<span className="">{list.title}</span>
						</Link>
					))}
				</div>
			))}
		</div>
	);
};

export default Menu;
