# Git Version Control Workflow

## 1. Working Directory
Create or modify project files.

## 2. Staging Area
Use `git add` to select changes for the next commit.

## 3. Commit
Use `git commit` to save a snapshot of staged changes.

## 4. Branching
Create a separate branch to develop changes independently.

## 5. Merging
Merge completed changes into the main branch after reviewing them.

## 6. Remote Repository
Push local commits to GitHub and pull changes when needed.

## Best Practices
- Write meaningful commit messages.
- Review changes before committing.
- Avoid committing passwords or API keys.
- Keep commits focused on related changes.
- Review pull requests before merging.

## Practical Branch Workflow

A feature branch keeps changes separate from the main branch
until they are ready to merge.

Example workflow:

1. Create a feature branch.
2. Make and review changes.
3. Stage the relevant files.
4. Commit with a descriptive message.
5. Switch back to main.
6. Merge the feature branch.
7. Push the updated main branch to GitHub.