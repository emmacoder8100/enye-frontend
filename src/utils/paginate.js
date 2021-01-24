export const paginateResult = ({ page, profiles, perPage }) => {
	const start = perPage * (page - 1);
	const end = start + perPage;

	const results = profiles.slice(start, end);

	const totalPages = Math.ceil(profiles.length / perPage);

	return { results, totalPages };
};

export const applyFilter = ({ profiles, filters }) => {
	let response = profiles;

	const { gender, paymentMethod, search } = filters;

	if (search) {
		const lowercaseSearch = search.toLowerCase();

		response = response.filter((profile) => {
			const name = `${profile.FirstName.toLowerCase()} ${profile.LastName.toLowerCase()}`;

			return name.indexOf(lowercaseSearch) !== -1;
		});
	}

	if (gender) {
		response = response.filter((profile) => profile.Gender === gender);
	}

	if (paymentMethod) {
		response = response.filter((profile) => profile.PaymentMethod === paymentMethod);
	}

	return response;
};
