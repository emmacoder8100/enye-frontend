export const SearchAndFilter = ({ filters, setFilters, setPage }) => {
	return (
		<div className="row mb-4">
			<div className="col-12 col-md-6 mb-2 mb-md-0">
				<input
					type="search"
					aria-label="Search"
					placeholder="Search"
					value={filters.search}
					className="form-control"
					onChange={(e) => {
						setPage(1);
						setFilters((values) => ({ ...values, search: e.target.value }));
					}}
				/>
			</div>
			<div className="col-12 col-md-6">
				<div className="row">
					<div className="col-6">
						<select
							value={filters.gender}
							className="form-select"
							onChange={(e) => {
								setPage(1);
								setFilters((values) => ({ ...values, gender: e.target.value }));
							}}
						>
							<option value="">--Select Gender--</option>
							<option>Male</option>
							<option>Female</option>
							<option>Prefer to skip</option>
						</select>
					</div>
					<div className="col-6">
						<select
							value={filters.paymentMethod}
							className="form-select"
							onChange={(e) => {
								setPage(1);
								setFilters((values) => ({ ...values, paymentMethod: e.target.value }));
							}}
						>
							<option value="">--Select Payment Method--</option>
							<option value="cc">CC</option>
							<option value="money order">Money Order</option>
							<option value="paypal">Paypal</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};
