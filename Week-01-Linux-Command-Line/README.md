# Week 1: Linux and Command-Line Basics

This directory contains the Week 1 practical work completed for the **DecodeLabs DevOps Internship**. The exercises introduce essential Linux shell commands for navigating the filesystem, managing files and directories, writing configuration and log files, and verifying command results.

## Objectives

- Navigate the Linux filesystem with `pwd`, `ls`, and `cd`.
- Create directories and files with `mkdir` and `touch`.
- Read and write file contents with `cat`, `echo`, and `tee`.
- Move or rename files with `mv`.
- Inspect file details and permissions with `ls -l` and `ls -ld`.
- Use `sudo` when a command requires administrator privileges.
- Build and verify a simple application configuration and log directory structure.

## Environment

| Component | Details |
|---|---|
| Operating system | Ubuntu on Windows Subsystem for Linux (WSL) |
| Shell | Bash |
| Linux exercise path | `/app` |
| Repository practice file | `practice/welcome.txt` |
| Version control | Git and GitHub |

> **Path note:** `/app` is the Linux filesystem location used in the exercises. `practice/` is a directory inside this repository. They are separate locations.

## Repository Structure

```text
Week-01-Linux-Command-Line/
├── README.md
├── command.md
├── practice/
│   └── welcome.txt
└── screenshots/
    ├── 01-linux-navigation.png
    ├── 02-basic-file-operations.png
    ├── 03-directory-creation.png
    ├── 04-config-file.png
    ├── 05-server-log.png
    ├── 06-log-backup.png
    └── 08-final-verification.png
```

## Practical Tasks Completed

- [x] Navigated directories and checked the current path with `cd` and `pwd`.
- [x] Listed files and inspected file details using `ls`, `ls -l`, and `ls -ld`.
- [x] Created directories and files using `mkdir` and `touch`.
- [x] Read and wrote text with `cat`, `echo`, and `tee`.
- [x] Created `/app/logs/`.
- [x] Created `/app/config.conf`.
- [x] Wrote `Started` to `/app/logs/server.log` and checked its contents.
- [x] Renamed `server.log` to `server.bak`.
- [x] Verified the final directory structure and file contents.

## Final Linux Exercise Structure

After completing the log-backup exercise, the expected structure is:

```text
/app/
├── config.conf
└── logs/
    └── server.bak
```

The backup file `/app/logs/server.bak` contains:

```text
Started
```

## Screenshot Evidence

The screenshots below document the terminal exercises included in this repository.

| Screenshot | Evidence |
|---|---|
| [01 — Linux navigation](screenshots/01-linux-navigation.png) | Basic filesystem navigation |
| [02 — File operations](screenshots/02-basic-file-operations.png) | Creating, reading, or changing files |
| [03 — Directory creation](screenshots/03-directory-creation.png) | Creating the exercise directories |
| [04 — Configuration file](screenshots/04-config-file.png) | Creating `/app/config.conf` |
| [05 — Server log](screenshots/05-server-log.png) | Creating and inspecting the server log |
| [06 — Log backup](screenshots/06-log-backup.png) | Renaming the log to `server.bak` |
| [08 — Final verification](screenshots/08-final-verification.png) | Verifying the completed structure |

## Documentation and Practice

- **[Linux command reference](command.md):** command explanations, practical exercises, example commands, and expected output.
- **[Practice file](practice/welcome.txt):** a small text file stored in the repository for command-line practice.
- **[Screenshots](screenshots/):** terminal evidence for the completed exercises.

To follow the work, open an Ubuntu/WSL terminal and work through the exercises in `command.md`. Commands that create files under `/app` may require `sudo`, depending on the permissions of your Linux environment. Review commands before running them, especially commands that overwrite or delete files.

## Key Learnings

These exercises provided practical experience with Linux directory navigation, file and directory operations, file-content handling, permission inspection, administrator privileges, shell piping, and log-file backups. These skills form a foundation for later DevOps work involving shell scripts, application deployment, containers, and CI pipelines.

## Conclusion

Week 1's Linux command-line exercises are documented with a command reference and screenshots. The final exercise verifies the configuration file and the renamed log backup under `/app`.

---

**Internship:** DecodeLabs DevOps Internship  
**Week:** 01  
**Topic:** Linux and Command-Line Basics
