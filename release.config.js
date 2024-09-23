module.exports = {
    branches: ["main"],
    plugins: [
      "@semantic-release/commit-analyzer", // Analyze commits to determine release type (patch/minor/major)
      "@semantic-release/release-notes-generator", // Generate release notes
      "@semantic-release/changelog", // Update CHANGELOG.md
    //   "@semantic-release/npm", // Publish to npm (if needed)
    //   "@semantic-release/github", // Create a release on GitHub
      [
        "@semantic-release/git",
        {
          assets: ["package.json", "CHANGELOG.md"], // Commit updated version and changelog
          message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
        },
      ],
    ],
  };
  