import Link from 'next/link';

const ClientsPage = () => {
	const clients = [
		{ id: '1', name: 'Mark' },
		{ id: '2', name: 'Leo' },
	];
	return (
		<div>
			<h1>Clients Page</h1>;
			<ul>
				{clients.map((client) => {
					return (
						<li key={client.id}>
							<Link
								href={{
									pathname: '/clients/[id]',
									query: { id: client.id },
								}}>
								{client.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ClientsPage;
