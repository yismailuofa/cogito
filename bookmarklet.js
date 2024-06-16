javascript: (function () {
  /** Replace these variables with your own values */
  const apiUrl = "https://api.github.com/repos/yismailuofa/cogito/issues";
  const token = "";

  const title = document.title ?? "No title";
  const body = window.location.href ?? "No URL";

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
    },
    body: JSON.stringify(issueData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.html_url) {
        alert(`Issue created: ${data.html_url}`);
      } else {
        alert(`Error creating issue: ${data.message}`);
      }
    })
    .catch((error) => {
      alert(`Network error: ${error}`);
    });
})();
