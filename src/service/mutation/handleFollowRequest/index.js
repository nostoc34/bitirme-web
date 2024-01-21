import { gql } from "apollo-boost";

export default gql`
	mutation ($followID: String!, $reqResponse: String!) {
		handleFollowRequest(followID: $followID, reqResponse: $reqResponse) {
			message
			code
		}
	}
`;
