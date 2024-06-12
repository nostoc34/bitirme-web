import { gql } from "apollo-boost";

export default gql`
	mutation ($toUser: String!) {
		handleFollow(toUser: $toUser) {
			message
			code
			data {
				id
				fromUser
				toUser
				status
				createdAt
			}
		}
	}
`;
