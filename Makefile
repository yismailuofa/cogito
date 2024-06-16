# This makefile reads the local token, replaces the token in the 
# source code, and saves it as tokenized_bookmarklet.js

# Read the local token stored as GH_TOKEN in the .env file
GH_TOKEN := $(shell cat .env | grep GH_TOKEN | cut -d '=' -f 2)

# Generate the bookmarklet.js file with the token
gen: bookmarklet.js
	sed 's/YOUR_GITHUB_TOKEN/$(GH_TOKEN)/' bookmarklet.js > tokenized_bookmarklet.js
