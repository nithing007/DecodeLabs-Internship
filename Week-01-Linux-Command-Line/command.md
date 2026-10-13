# Week 1 – Linux Command Line Commands

## 1. Objective

To learn and practise basic Linux commands for directory navigation, file creation, reading file contents, moving files, and verifying file permissions and directory structures.

## 2. Basic Linux Commands

### 2.1 Directory Navigation

| Command | Description |
|---|---|
| `pwd` | Displays the current working directory. |
| `ls` | Lists files and directories. |
| `ls -l` | Displays files with detailed information and permissions. |
| `ls -R /app` | Lists the contents of `/app` recursively. |
| `cd /` | Navigates to the root directory. |
| `cd /tmp` | Navigates to the `/tmp` directory. |
| `cd ..` | Moves to the parent directory. |

### 2.2 Directory Operations

| Command | Description |
|---|---|
| `mkdir practice` | Creates a directory named `practice`. |
| `mkdir -p /app/logs` | Creates `/app` and its `logs` subdirectory if they do not exist. |

### 2.3 File Operations

| Command | Description |
|---|---|
| `touch hello.txt` | Creates an empty file named `hello.txt` if it does not exist. |
| `cat hello.txt` | Displays the contents of a file. |
| `echo "Hello DevOps" > hello.txt` | Writes text to a file, replacing its existing contents. |
| `mv hello.txt welcome.txt` | Renames or moves a file. |
| `rm filename` | Deletes a file. Use carefully because deletion may be difficult to reverse. |

### 2.4 Using Administrative Permissions

| Command | Description |
|---|---|
| `sudo mkdir -p /app/logs` | Creates the application log directory with administrator privileges. |
| `sudo touch /app/config.conf` | Creates the configuration file with administrator privileges. |
| `sudo mv /app/logs/server.log /app/logs/server.bak` | Renames the log file to `server.bak`. |

### 2.5 Writing and Reading Logs

```bash
echo "Started" | sudo tee /app/logs/server.log
cat /app/logs/server.log
```

**Explanation:**
- `echo "Started"` produces the text `Started`.
- `|` sends the output to the next command.
- `sudo tee` writes the text to the specified file with administrator privileges.
- `cat` displays the file contents.

## 3. Hands-on Practice

### Exercise 1: Create and Rename a File

```bash
mkdir -p practice
cd practice
touch hello.txt
echo "Hello DevOps" > hello.txt
cat hello.txt
mv hello.txt welcome.txt
ls -l
cat welcome.txt
```

**Expected output:**

```text
Hello DevOps
```

### Exercise 2: Create the Application Directory Structure

```bash
sudo mkdir -p /app/logs
ls -ld /app /app/logs
```

### Exercise 3: Create the Configuration File

```bash
sudo touch /app/config.conf
ls -l /app/config.conf
```

### Exercise 4: Create and Inspect the Server Log

```bash
echo "Started" | sudo tee /app/logs/server.log
cat /app/logs/server.log
```

**Expected output:**

```text
Started
```

### Exercise 5: Verify the Directory Structure

```bash
pwd
ls -R /app
```

### Exercise 6: Rename the Server Log

```bash
sudo mv /app/logs/server.log /app/logs/server.bak
ls -l /app/logs
cat /app/logs/server.bak
```

### Exercise 7: Verify the Configuration File

```bash
ls -l /app/config.conf
ls -R /app
```

## 4. Final Directory Structure

After completing the practical mission, the expected structure is:

```text
/app/
├── config.conf
└── logs/
    └── server.bak
```

The backup file `server.bak` contains the text `Started`.

## 5. Key Learnings

- Navigating the Linux filesystem using `cd` and `pwd`.
- Listing files and directories using `ls`.
- Creating directories and files using `mkdir` and `touch`.
- Reading and writing file contents using `cat`, `echo`, and `tee`.
- Moving and renaming files using `mv`.
- Using `sudo` for operations that require administrator privileges.
- Verifying file permissions and directory structures.
- Understanding basic shell piping using `|`.

## 6. Conclusion

Successfully completed the Week 1 Linux command-line practical exercises, including file and directory operations, application configuration setup, log creation, log backup, and final verification.