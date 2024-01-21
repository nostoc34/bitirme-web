import { gql } from "apollo-boost";

export default gql`
	query {
		getOwnProfileData {
			message
			code
			data {
				id
				userName
				fullName
				email
				profilePhoto
				about
				type
				follows
				followers
				isPrivate
				isActive
				createdAt
			}
		}
	}
`;
