export const Pagination = ({ page, setPage, totalPages }) => {
	if (totalPages < 2) return null;

	return (
		<nav aria-label="Page navigation">
			<ul className="pagination justify-content-center mt-4">
				<li className={`page-item${page > 1 ? "" : " disabled"}`}>
					<button
						className="page-link"
						onClick={() => {
							if (page > 1) {
								setPage(page - 1);
							}
						}}
					>
						Previous
					</button>
				</li>
				{[...Array(totalPages).keys()].map((key) => {
					return (
						<li className={`page-item${page === key + 1 ? " active" : ""}`}>
							<button className="page-link" onClick={() => setPage(key + 1)}>
								{key + 1}
							</button>
						</li>
					);
				})}
				<li className={`page-item${page >= totalPages ? " disabled" : ""}`}>
					<button
						className="page-link"
						onClick={() => {
							if (page < totalPages) {
								setPage(page + 1);
							}
						}}
					>
						Next
					</button>
				</li>
			</ul>
		</nav>
	);
};
