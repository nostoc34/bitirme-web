import { gql } from "apollo-boost";

export default gql`
	query {
		getConversations {
			message
			code
			data {
				id,
                targetUserInfo {
                    userID,
                    userName,
                    profilePhoto
                },
                lastMessage {
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
