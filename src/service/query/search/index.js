import { gql } from "apollo-boost";

export default gql`
	query ($searchText: String) {
		search (searchText: $searchText) {
			message
			code
			data {
				id
                userName
                fullName
                profilePhoto
                isPrivate
                isActive
                createdAt
                followStatus
			}
		}
	}
`;
