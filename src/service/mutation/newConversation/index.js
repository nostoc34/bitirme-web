import { gql } from "apollo-boost";

export default gql`
	mutation (
		$targetID: String!
	) {
		newConversation(
			targetID: $targetID
		) {
			message,
			code,
			data {
				id,
				users
			}
		}
	}
`;
