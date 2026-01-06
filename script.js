const documents = [
  { id: 1, title: "Authentication System", body: "JWT login security roles" },
  { id: 2, title: "Analytics Dashboard", body: "charts metrics KPIs" },
  { id: 3, title: "File Upload Validator", body: "file type size security" },
  { id: 4, title: "Audit Log System", body: "logging compliance traceability" },
  { id: 5, title: "Recommendation Engine", body: "rules scoring suggestions" }
];

// Build simple index
const index = documents.map(d => ({
  ...d,
  text: (d.title + " " + d.body).toLowerCase()
}));

function search() {
  const q = document.getElementById("query").value.toLowerCase();
  const results = document.getElementById("results");
  results.innerHTML = "";

  if (!q) return;

  index
    .map(d => {
      const score = d.text.split(q).length - 1;
      return { ...d, score };
    })
    .filter(d => d.score > 0)
    .sort((a, b) => b.score - a.score)
    .forEach(d => {
      const li = document.createElement("li");
      li.innerText = `${d.title} (score: ${d.score})`;
      results.appendChild(li);
    });
}
