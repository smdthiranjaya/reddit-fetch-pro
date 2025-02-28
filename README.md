# 🚀 Reddit Fetch Pro

A modern, lightweight Node.js package for fetching data from Reddit subreddits and user profiles.

[![npm version](https://img.shields.io/npm/v/reddit-fetch-pro.svg)](https://www.npmjs.com/package/reddit-fetch-pro)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/node/v/reddit-fetch-pro.svg)](https://nodejs.org)

## 📥 Installation

```bash
npm install reddit-fetch-pro
```

## 🔍 About

**Reddit Fetch Pro** is a powerful yet simple package for retrieving data from Reddit. It supports fetching posts from both subreddits and user profiles with clean, structured JSON output. Perfect for building Reddit-powered applications, bots, and data analysis tools.

## ✨ Features

- 🧩 **Simple API**: Easy to use with minimal setup
- 🔄 **Dual Fetching**: Get data from both subreddits and user profiles
- 🔢 **Customizable Limits**: Control how many posts to retrieve
- 📊 **Rich Metadata**: Each post comes with comprehensive details
- ⏱️ **Proper Timestamps**: Correctly formatted dates for all posts
- 🔍 **Error Handling**: Robust error management with helpful messages

## 🔧 Usage

### 👤 Fetch User Posts

```javascript
const reddit = require("reddit-fetch-pro");

// Get posts from a user profile
reddit({
    search: "spez",         // Reddit username
    limits: 3,              // Optional: Number of posts to retrieve
    type: "user"            // Specify user profile fetch
})
.then(response => {
    console.log(response);
    /*
    Output:
    {
        data: [
            {
                title: 'Announcing Reddit Talk...',
                image: 'https://www.reddit.com/r/...',
                link: 'https://www.reddit.com/r/...',
                like: 12580,
                dislike: 0,
                comment: 4378,
                subredditName: 'r/reddit',
                author: 'spez',
                dateCreated_UTC: 'Feb 25, 2025 3:21 PM',
                subreddit: 'reddit',
                id: 'xyz789',
                voteRatio: 0.87,
                nsfw: false
            },
            // More posts...
        ]
    }
    */
})
.catch(error => {
    console.log(error);
});
```

### 📕 Fetch from Subreddit

```javascript
const reddit = require("reddit-fetch-pro");

// Get posts from a subreddit
reddit({
    search: "programming",  // Subreddit name
    limits: 5               // Optional: Number of posts to retrieve
})
.then(response => {
    console.log(response);
    /*
    Output:
    {
        data: [
            {
                title: 'What programming books had the biggest impact on you?',
                image: 'https://www.reddit.com/r/programming/comments/...',
                link: 'https://www.reddit.com/r/programming/comments/...',
                like: 342,
                dislike: 0,
                comment: 127,
                subredditName: 'r/programming',
                author: 'username123',
                dateCreated_UTC: 'Feb 27, 2025 8:45 PM',
                subreddit: 'programming',
                id: 'abc123',
                voteRatio: 0.95,
                nsfw: false
            },
            // More posts...
        ]
    }
    */
})
.catch(error => {
    console.log(error);
});
```

### 🔢 Customize Post Limits

```javascript
// Get only 2 posts from r/news
reddit({
    search: "news",
    limits: 2
})
.then(response => {
    console.log(`Found ${response.data.length} posts`);
})
.catch(error => {
    console.log(error);
});
```

## 📊 Response Structure

Each post in the response contains the following information:

| Field | Type | Description |
|-------|------|-------------|
| `title` | String | The title of the post |
| `image` | String | URL of the post's image or content |
| `link` | String | Full permalink to the Reddit post |
| `like` | Number | Upvote count |
| `dislike` | Number | Downvote count |
| `comment` | Number | Comment count |
| `subredditName` | String | Formatted subreddit name (e.g., "r/programming") |
| `author` | String | Username of the post's author |
| `dateCreated_UTC` | String | Human-readable creation date |
| `subreddit` | String | Raw subreddit name |
| `id` | String | Unique Reddit post ID |
| `voteRatio` | Number | Ratio of upvotes to total votes (0.0-1.0) |
| `nsfw` | Boolean | Whether the post is marked NSFW |

## ❓ FAQ

**Q: Can I use this for commercial projects?**  
A: Yes! This package is MIT licensed, which allows for commercial use.

**Q: Is there a rate limit?**  
A: This package uses the Reddit public API, which has rate limits. For high-volume applications, consider implementing a delay between requests.

**Q: Can I fetch comments?**  
A: Currently, the package only fetches post data. Comment fetching may be added in future updates.

## 🛠️ Error Handling

The package uses promise-based error handling. Always implement a `.catch()` block to handle potential errors:

```javascript
reddit({
    search: "non_existent_subreddit"
})
.then(response => {
    console.log(response);
})
.catch(error => {
    console.error("Error occurred:", error.message);
});
```

## 🔜 Upcoming Features

- 💬 Comment fetching
- 🔄 Pagination support
- 🔍 Advanced search options
- 📊 Analytics and statistics

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue on GitHub.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📫 Contact

For bugs, feature requests, or other questions:
- GitHub Issues: [Submit an issue](https://github.com/smdthiranjaya/reddit-fetch-pro/issues)
- Author: [Thirah](https://github.com/smdthiranjaya)
