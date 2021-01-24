import axios from "axios";
import { useEffect, useState } from "react";

import { paginateResult, applyFilter } from "./utils/paginate";
import { Pagination, SearchAndFilter, TableRecords } from "./components";

function App() {
	const [page, setPage] = useState(1);
	const [error, setError] = useState(null);
	const [profiles, setProfiles] = useState([]);
	const [loading, setLoading] = useState(false);
	const [filters, setFilters] = useState({ search: "", gender: "", paymentMethod: "" });

	const perPage = 20;

	useEffect(() => {
		fetchData();

		async function fetchData() {
			setLoading(true);
			try {
				const { data } = await axios.get("https://api.enye.tech/v1/challenge/records");

				if (data && data.status) {
					setProfiles(data.records.profiles);
				} else {
					throw new Error();
				}
			} catch (error) {
				setError("There is an error fetching data");
			} finally {
				setLoading(false);
			}
		}
	}, []);

	const renderContent = () => {
		if (loading) {
			return <p className="text-center">Loading...</p>;
		}

		if (error) {
			return <p className="text-center">{error}</p>;
		}

		const filtereredProfile = applyFilter({ profiles, filters });

		const { results, totalPages } = paginateResult({ page, profiles: filtereredProfile, perPage });

		return (
			<>
				<SearchAndFilter filters={filters} setFilters={setFilters} />
				<TableRecords records={results} />
				<Pagination totalPages={totalPages} page={page} setPage={setPage} />
			</>
		);
	};

	return (
		<>
			<header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
				<p className="h5 my-0 me-md-auto fw-normal">ENYE Front-End</p>
				<nav className="my-2 my-md-0 me-md-3">
					<a className="p-2 text-dark" href="#">
						Log In
					</a>
				</nav>
				<a className="btn btn-outline-primary" href="#">
					Sign up
				</a>
			</header>
			<main className="container">
				<div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
					<h1 className="display-4">Records API</h1>
					<p className="lead">
						The provided API below returns a list of profiles with information surrounding e-commerce
						transaction details.
					</p>
				</div>

				{renderContent()}
			</main>
		</>
	);
}

export default App;
