javascript: (function () {
  /** Replace these variables with your own values */
  const apiUrl = "https://api.github.com/repos/yismailuofa/cogito/issues";
  const token = "YOUR_GITHUB_TOKEN";

  const body = window.location.href ?? "No URL";
  const title = prompt(
    "Confirm your issue's title:",
    document.title ?? "No title"
  );

  if (!title) {
    return;
  }

  const issueData = {
    title,
    body,
  };

  fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.full+json",
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify(issueData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          `Error creating issue: ${response.status} ${response.statusText}`
        );
      }
    })
    .then((data) => {
      alert(`Issue created: ${data.html_url}`);
    })
    .catch((error) => {
      alert("Error creating issue, see console for details");
      console.error("Error creating issue:", error);
    });
})();
