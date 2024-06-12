import { gql } from "apollo-boost";

export default gql`
	query ($conversationID: String!) {
		getMessages (conversationID: $conversationID) {
			message
			code
			data {
				usersPayload {
                    userID,
                    userName,
                    profilePhoto
                },
                messages {
                    id,
                    conversationID,
                    senderID,
                    receiverID,
                    message,
                    createdAt
                }
			}
		}
	}
`;
