## API Documentation

> ⚠️ All requests must include this header:
>
> x-api-key: YOUR_API_GATEWAY_KEY

### 1. Analyze Startup Name Sentiment

**GET** `/analyze?name=MyStartupIdea`

Returns the sentiment of the provided name using Amazon Comprehend.

**Response**
| Code | Description |
|------|-------------|
| 200  | {"Sentiment": "POSITIVE", "ConfidenceScores": {"Positive": 0.95, ...}} |
| 400  | {"message": "Missing name parameter"} |
| 500  | {"message": "Error analyzing sentiment"} |
