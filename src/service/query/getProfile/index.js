import { gql } from "apollo-boost";

export default gql`
	query ($userName: String!) {
		getProfile (userName: $userName) {
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
                followStatus
			}
		}
	}
`;
