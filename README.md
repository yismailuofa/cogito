### Create a repo and token

1. Create a public or private repo to store your links.

1. Generate a repo specific token through settings > developer settings > personal access tokens > fine-grained tokens. Give it access to your repo and permissions to the scope "Issues".

### Add the token and url to the bookmarklet

1. Modify the `bookmarklet.js` file with repo url.

#### Option A: Using a .env file

1. Create a .env file in the root of the project and add the token as a variable like `GH_TOKEN=your_token_here`.

1. Run make to create a new `tokenized_bookmarklet.js` file.

#### Option B: Manually inserting the token

1. Manually insert the token and your repo url in `bookmarklet.js`.

### Using the bookmarklet

1. Copy the source code from the file with the token. (Either `tokenized_bookmarklet.js` or `bookmarklet.js` depending on the option you chose).

1. Create a new bookmark in your browser and paste the code in the URL field.

1. Click the bookmarklet when you are on a page you want to bookmark!
