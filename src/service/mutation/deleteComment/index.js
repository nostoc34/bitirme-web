import { gql } from "apollo-boost";

export default gql`
	mutation ($commentID: String!) {
		deleteComment(commentID: $commentID) {
			message
			code
		}
	}
`;
