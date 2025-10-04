# Git diff

## to see what changed in a particular commit 

```bash
git log <commit id>
git log dd45b073db9421cdb951ea0d5cc0315d4b41c189

COMMIT_HASH=5830cde4e13b0dbe91eaa2389be722ea669f3139

# See which files changed
git show --name-only $COMMIT_HASH

# See the actual changes (diff)
git show $COMMIT_HASH

# See changes for a particular file in that commit
git show $COMMIT_HASH -- <file-path> 
git show $COMMIT_HASH -- javascript/index.js

# See a summary (which files changed and how many lines were added/removed)
git show --stat $COMMIT_HASH

# To find the commit hash:
git log --oneline

# To view just the file names without metadata:
git diff-tree --no-commit-id --name-only -r $COMMIT_HASH

```

## Differences in two commits

```bash
COMMIT1=dd45b073db9421cdb951ea0d5cc0315d4b41c189
COMMIT2=193bc9e2342d01dc600dd40ec1499fb21e24be59

# Compare two commits (full diff)
git diff $COMMIT2 $COMMIT1

# See only which files changed (no content)
git diff --name-only $COMMIT2 $COMMIT1

# See summary (files + how many lines changed)
git diff --stat $COMMIT2 $COMMIT1

# Compare changes in a specific file
git diff $COMMIT2 $COMMIT1 -- <file-path>

# To compare with your current working directory (shows what’s changed since that commit)
git diff $COMMIT_HASH

# To compare with the previous commit:
git diff HEAD~1 HEAD
```

## Comparing with branches

```bash
# Compare two branches (full diff)
git diff main feature/login

# Show only file names changed between branches
git diff --name-only main feature/login

# Show summary of changes (files + insertions/deletions)
git diff --stat main feature/login

# Compare specific file across branches
git diff main feature/login -- src/pages/Login.js

# Compare tags (for release versions, for example)
git diff v1.0.0 v1.1.0

# To see which commits differ between branches:
git log main..feature/login --oneline

# Or vice versa:
git log feature/login..main --oneline

# To visualize the comparison nicely (great for PRs):
git diff main...feature/login

```