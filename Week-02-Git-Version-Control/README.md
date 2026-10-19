# Week 2 - Version Control with Git
## Objective

Learn Git and GitHub fundamentals for tracking code changes, maintaining project history, and collaborating on software projects.

## Topics Covered

- Git repository initialization and cloning
- Staging and committing changes
- Checking repository status and reviewing differences
- Creating and switching branches
- Merging branches and resolving merge conflicts
- Pushing and pulling changes between local and remote repositories
- Creating pull requests and reviewing changes

## Documentation

| File | Description |
|---|---|
| [Git Commands](git-commands.md) | Essential Git commands with examples and explanations |
| [Git Workflow](workflow.md) | Git's working directory, staging area, commits, branches, and remote workflow |

## Tools Used

- Git
- GitHub
- Visual Studio Code
- Windows Command Prompt

## Setup and Installation

### Prerequisites

Install Git and create a GitHub account before practising the commands.

Verify your Git installation:

```bash
git --version
```

Configure your Git identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Replace the example values with your own name and email address.

### Clone the Repository

Clone the internship repository to your local machine:

```bash
git clone https://github.com/nithing007/DecodeLabs-Internship.git
cd DecodeLabs-Internship
```

## How to Use

1. Read [Git Commands](git-commands.md) to understand common Git operations.
2. Follow [Git Workflow](workflow.md) to learn how changes move from your working directory to GitHub.
3. Practise checking changes with `git status` and `git diff`.
4. Stage and save changes using `git add` and `git commit`.
5. Create feature branches and practise merging changes.
6. Use `git push` and `git pull` to synchronise local and remote repositories.
7. Explore pull requests and practise resolving merge conflicts.

## Best Practices

- Write clear, meaningful commit messages.
- Make small, focused commits.
- Review changes before committing.
- Use branches to isolate new features or fixes.
- Pull the latest changes before starting new work.
- Never commit passwords, API keys, access tokens, or other secrets.

## Learning Outcomes

After completing this task, I can:

- Explain the basic Git version control workflow.
- Track project changes using commits.
- Create and manage branches.
- Synchronise changes with a GitHub repository.
- Understand pull requests and merge conflicts.
- Maintain a readable project history.

## License

This documentation is intended for educational and internship purposes. Refer to the repository's root `LICENSE` file, if present, for the applicable licensing terms.
