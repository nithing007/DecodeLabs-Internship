
# Week 2: Git and GitHub Version Control

## Overview

This directory contains the Week 2 documentation for the **DecodeLabs DevOps Internship**. It focuses on using Git to track changes, maintain project history, work safely with branches, and collaborate through GitHub pull requests.

The directory currently contains three Markdown documents: this README, a Git command reference, and a practical workflow guide. The structure below reflects the files currently committed to the repository.

## Objectives

- Understand the purpose of version control and Git repositories.
- Initialise or clone repositories and inspect configured remotes.
- Check working-tree changes and review diffs before committing.
- Stage changes and create meaningful commits.
- Create and switch branches to isolate work.
- Fetch, pull, and push changes to a remote repository.
- Understand branch merging, merge conflicts, and pull-request reviews.
- Follow safe practices when working with shared repositories.

## Environment and Tools

| Component | Details |
|---|---|
| Version control | Git |
| Remote hosting and collaboration | GitHub |
| Editor | Visual Studio Code |
| Terminal used for practice | Windows Command Prompt / terminal |
| Documentation format | Markdown (`.md`) |

## Exact Directory Structure

```text
Week-02-Git-Version-Control/
├── README.md
├── git-commands.md
└── workflow.md
```

### File Descriptions

| File | Purpose |
|---|---|
| [`README.md`](README.md) | Week 2 overview, objectives, setup, and learning outcomes. |
| [`git-commands.md`](git-commands.md) | Quick reference for repository, change-tracking, commit, branch, and remote commands. |
| [`workflow.md`](workflow.md) | Explanation of the Git workflow and a practical feature-branch process. |

> **Structure note:** The Week 2 directory currently contains these three Markdown files. No screenshots, application source code, or additional subdirectories are present in the committed folder.

## Prerequisites

1. Install Git and verify that it is available in your terminal:

   ```bash
   git --version
   ```

2. Configure the name and email that should appear on your commits. Replace the example values with your own details:

   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your-email@example.com"
   ```

3. Clone the internship repository if it is not already available locally:

   ```bash
   git clone https://github.com/nithing007/DecodeLabs-Internship.git
   cd DecodeLabs-Internship/Week-02-Git-Version-Control
   ```

   If the repository is already cloned, open the existing local copy and change to the Week 2 directory instead of cloning it again.

## How to Use This Week's Documentation

1. Read [`git-commands.md`](git-commands.md) for the syntax and purpose of common Git commands.
2. Read [`workflow.md`](workflow.md) to understand how changes move from the working directory to the staging area, local commits, branches, and the remote repository.
3. Practise `git status`, `git diff`, and `git diff --cached` before saving changes.
4. Create a feature branch and make a small practice change.
5. Stage only the intended files and inspect the staged diff.
6. Commit with a concise message, push the branch, and open a pull request on GitHub.
7. Review merge conflicts and understand how to resolve them before a change is merged.

## Example: Safe Feature-Branch Workflow

Run these commands from the root of your cloned repository. Replace the branch name or file path as needed for your practice task.

```bash
# Check the current branch and working-tree state
git status

# Fetch the latest remote branch information
git fetch origin

# Create a separate branch for your work
git switch -c docs/week-2-practice

# After editing a file, review the changes
git status
git diff

# Stage only the file you intend to commit
git add Week-02-Git-Version-Control/README.md

git diff --cached

# Save the staged changes
git commit -m "docs: practice Git workflow"

# Publish the new branch to GitHub
git push -u origin docs/week-2-practice
```

Then open a pull request on GitHub and review the changes before merging. For shared projects, prefer a feature branch and pull request rather than committing directly to `main`.

## Important Git Commands

| Command | Purpose |
|---|---|
| `git status` | Shows the current branch and working-tree state. |
| `git diff` | Shows changes that have not been staged. |
| `git diff --cached` | Shows changes that are staged for the next commit. |
| `git add <file>` | Stages the selected file. |
| `git commit -m "message"` | Creates a commit from staged changes. |
| `git switch -c <branch>` | Creates and switches to a new branch. |
| `git fetch origin` | Downloads remote updates without merging them into the current branch. |
| `git pull origin <branch>` | Fetches and integrates changes from the specified remote branch. |
| `git push -u origin <branch>` | Pushes the branch and configures its upstream. |
| `git log --oneline` | Shows a compact commit history. |

Refer to [`git-commands.md`](git-commands.md) for the broader command list and [`workflow.md`](workflow.md) for the workflow explanation.

## Best Practices

- Check `git status` before and after important operations.
- Review both unstaged and staged changes before committing.
- Keep commits small and focused on one logical change.
- Use descriptive branch names and commit messages.
- Fetch or pull relevant updates before beginning work on an existing branch.
- Resolve merge conflicts carefully and inspect the final files before committing the resolution.
- Never commit passwords, API keys, access tokens, private keys, or other secrets.
- Use branches and pull requests to make changes reviewable.

## Learning Outcomes

After working through this task, I should be able to explain the basic Git lifecycle, inspect and stage changes, create commits, manage branches, synchronise work with GitHub, and describe how pull requests and merge conflicts fit into a collaborative development workflow.

## License

No `LICENSE` file is currently present at the repository root. Unless a license is added, the repository does not explicitly declare an open-source license. Add the appropriate license file if the project is intended to be distributed under specific reuse terms.

---

**Internship:** DecodeLabs DevOps Internship  
**Week:** 02  
**Topic:** Git and GitHub Version Control
