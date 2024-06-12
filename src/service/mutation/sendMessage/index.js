import { gql } from "apollo-boost";

export default gql`
	mutation (
		$conversationID: String!
        $message: String!
	) {
		sendMessage(
			conversationID: $conversationID
            message: $message
		) {
			message
			code
			data {
				id,
				conversationID,
                senderID,
                receiverID,
                message,
                createdAt
			}
		}
	}
`;
