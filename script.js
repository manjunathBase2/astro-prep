document.addEventListener("DOMContentLoaded", async function () {
  const fileList = document.getElementById("file-list");
  const contentDiv = document.getElementById("content");
  const markdownContent = document.getElementById("markdown-content");

  async function loadFiles() {
    const repo = "manjunathBase/astro-prep"; // 🔹 CHANGE TO YOUR REPO NAME
    const branch = "main"; // 🔹 CHANGE IF YOUR BRANCH IS DIFFERENT
    const apiUrl = `https://api.github.com/repos/${repo}/git/trees/${branch}?recursive=1`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      fileList.innerHTML = "";
      data.tree.forEach((file) => {
        if (file.type === "blob" && file.path.endsWith(".md")) {
          const listItem = document.createElement("li");
          listItem.innerHTML = `<a href="#" data-path="${file.path}">${file.path}</a>`;
          listItem
            .querySelector("a")
            .addEventListener("click", async function (event) {
              event.preventDefault();
              await loadMarkdown(file.path);
            });
          fileList.appendChild(listItem);
        }
      });
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  }

  async function loadMarkdown(filePath) {
    const rawUrl = `https://raw.githubusercontent.com/manjunathBase/astro-prep/main/${filePath}`;

    try {
      const response = await fetch(rawUrl);
      const markdownText = await response.text();

      fileList.style.display = "none";
      contentDiv.style.display = "block";
      markdownContent.innerHTML = marked.parse(markdownText); // Render Markdown
    } catch (error) {
      console.error("Error loading Markdown file:", error);
    }
  }

  window.goBack = function () {
    fileList.style.display = "block";
    contentDiv.style.display = "none";
  };

  loadFiles();
});
