import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";

export const TableRecords = ({ records }) => {
	return (
		<div className="table-responsive">
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Gender</th>
						<th scope="col">Email</th>
						<th scope="col">UserName</th>
						<th scope="col">PhoneNumber</th>
						<th scope="col">PaymentMethod</th>
						<th scope="col">CreditCardNumber</th>
						<th scope="col">CreditCardType</th>
						<th scope="col">DomainName</th>
						<th scope="col">MacAddress</th>
						<th scope="col">URL</th>
						<th scope="col">Latitude</th>
						<th scope="col">Longitude</th>
						<th scope="col">LastLogin</th>
					</tr>
				</thead>
				<tbody>
					{records.length === 0 ? (
						<tr>
							<td colSpan={14} className="text-center">
								No record found!
							</td>
						</tr>
					) : (
						records.map((profile) => (
							<tr key={uuidv4()}>
								<td>
									{profile.FirstName} {profile.LastName}
								</td>
								<td>{profile.Gender}</td>
								<td>{profile.Email}</td>
								<td>{profile.UserName}</td>
								<td>{profile.PhoneNumber}</td>
								<td>{profile.PaymentMethod}</td>
								<td>{profile.CreditCardNumber}</td>
								<td>{profile.CreditCardType}</td>
								<td>{profile.DomainName}</td>
								<td>{profile.MacAddress}</td>
								<td>{profile.URL}</td>
								<td>{profile.Latitude}</td>
								<td>{profile.Longitude}</td>
								<td>{format(new Date(profile.LastLogin), "MMM do, yyyy h:mm a")}</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
};
