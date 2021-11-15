import Link from 'next/link';

const HomePage = () => {
	return (
		<div>
			<h1>Home Page</h1>
			<ul>
				<li>
					<Link href="/portfolio">Portfolio</Link>
				</li>
				<li>
					<Link href="/clients">clients</Link>
				</li>
				<li></li>
			</ul>
		</div>
	);
};

export default HomePage;
