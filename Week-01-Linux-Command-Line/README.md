# Week 1: Linux & Command Line Basics

## 📌 Overview

This folder contains my Week 1 DevOps internship work at **DecodeLabs**, focused on learning and practising fundamental Linux commands and command-line operations.

The objective was to understand Linux filesystem navigation, file and directory management, basic text operations, and permissions required for everyday DevOps tasks.

## 🎯 Objectives

- Understand the Linux filesystem hierarchy.
- Navigate directories using basic Linux commands.
- Create, read, move, and rename files.
- Create application directories and configuration files.
- Create and inspect server log files.
- Understand basic file permissions and the use of `sudo`.
- Verify directory structures and command outputs.

## 🛠️ Environment

| Component | Details |
|---|---|
| Operating System | Ubuntu on Windows Subsystem for Linux (WSL) |
| Shell | Bash |
| Practice Location | `/app` |
| Version Control | Git and GitHub |

## 📂 Project Structure

```text
Week-01-Linux-Command-Line/
├── README.md
├── commands.md
├── screenshots/
│   ├── 01-linux-navigation.png
│   ├── 02-basic-file-operations.png
│   ├── 03-directory-creation.png
│   ├── 04-config-file.png
│   ├── 05-server-log.png
│   ├── 06-directory-verification.png
│   ├── 07-log-backup.png
│   └── 08-final-verification.png
└── practice/
    ├── welcome.txt
    └── ...
```

*Note: The screenshot names and practice files above are examples. Keep this structure and the filenames aligned with the files actually present in your repository.*

## 🧪 Tasks Completed

- [x] Practised Linux directory navigation using `cd` and `pwd`.
- [x] Listed files and directories using `ls` and `ls -l`.
- [x] Created directories using `mkdir`.
- [x] Created and inspected files using `touch` and `cat`.
- [x] Wrote text to files using `echo` and `tee`.
- [x] Created the `/app/logs` directory.
- [x] Created the `/app/config.conf` configuration file.
- [x] Created `/app/logs/server.log` with the text `Started`.
- [x] Renamed `server.log` to `server.bak`.
- [x] Verified the final application directory structure.

## 📁 Final Application Structure

The completed practical task produced the following directory structure:

```text
/app/
├── config.conf
└── logs/
    └── server.bak
```

The `server.bak` file contains:

```text
Started
```

## 📚 Documentation

For the complete list of commands, examples, and explanations, see:

- [`commands.md`](commands.md) — Linux commands and hands-on exercises.
- [`screenshots/`](screenshots/) — Terminal screenshots documenting the practical work.

## 💡 Key Learnings

Through these exercises, I gained hands-on experience with Linux command-line operations, filesystem navigation, file management, basic permissions, and log-file handling.

These fundamentals provide a foundation for further DevOps learning, including shell scripting, application deployment, Docker, and CI/CD pipelines.

## ✅ Conclusion

Successfully completed the Week 1 Linux command-line practical exercises as part of my DecodeLabs DevOps internship and documented the commands and results for future reference.

---

**Internship:** DecodeLabs DevOps Internship  
**Week:** 01  
**Topic:** Linux & Command Line Basics