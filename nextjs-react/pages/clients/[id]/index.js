import { useRouter } from 'next/router';
const ClientProjectsPage = () => {
	const router = useRouter();

	console.log(router.query);
	const loadProjectHandler = () => {
		router.push('/clients/mark/project1');
	};
	return (
		<div>
			<h1>Client Projects Page</h1>;
			<button onClick={loadProjectHandler}>Load Project</button>
		</div>
	);
};

export default ClientProjectsPage;
