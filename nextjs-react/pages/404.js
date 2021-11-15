import Link from 'next/link';

const NotFoundPage = () => {
	return (
		<div>
			<h1>Page Not Found</h1>

			<Link href="/">Go Back</Link>
		</div>
	);
};

export default NotFoundPage;
