# Voice Assistants

We allow you to create voice assistant agents that can be used to automate your phone calls. You can use these agents to automate your customer support, sales, and marketing calls.

## Outbound Call

Make calls to your customers using our API

URL: https://api-pr-dev.l3agi.com/v1/call/outbound

Method: POST

Authentication: API Key

Description: This endpoint is used to initiate an outbound call.

Request Body:

```json
{
  "agent_id": "<UUID of the agent>",
  "contact": {
    "name": "<Name of the contact>",
    "phone": "<Phone number of the contact>",
    "description": "<Description of the contact>",
    "email": "<Email of the contact>"
  }
}
```

Response: Empty string

Errors:

- 400 Bad Request - If the OpenAI API key is not set or if there are issues with the Twilio credentials, Play.ht API key and user ID, or Deepgram API key.

### Curl:

```bash
curl -X POST https://api-pr-dev.l3agi.com/v1/call/outbound \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer YOUR_API_KEY' \
-d '{
  "agent_id": "UUID of the agent",
  "contact": {
    "name": "Name of the contact",
    "phone": "Phone number of the contact",
    "description": "Description of the contact",
    "email": "Email of the contact"
  }
}'
```

## Inbound Call (Coming Soon)

Receive calls from customers on your phone number

Endpoint: Inbound Call

URL: /inbound

Method: POST

Status Code: 201

Description: This endpoint is used to create a new inbound call. This feature is coming soon.
