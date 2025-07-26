#!/bin/bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're on the dev branch
print_info "Checking current branch..."
current_branch=$(git branch --show-current)

if [ "$current_branch" != "dev" ]; then
    print_error "You must be on the dev branch to create a release."
    print_info "Current branch: $current_branch"
    print_info "Please switch to dev branch: git checkout dev"
    exit 1
fi

print_success "On dev branch ✓"

# Check if working directory is clean
if ! git diff-index --quiet HEAD --; then
    print_error "Working directory is not clean. Please commit or stash your changes."
    git status --porcelain
    exit 1
fi

print_success "Working directory is clean ✓"

# Get version from user
echo
print_info "Enter the version number (MAJOR.MINOR.PATCH format):"
read -p "Version: " version

# Validate version format
if ! [[ $version =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    print_error "Invalid version format. Please use MAJOR.MINOR.PATCH (e.g., 1.2.3)"
    exit 1
fi

print_success "Version format is valid: $version"

# Check if tag already exists
if git tag -l | grep -q "^v$version$"; then
    print_error "Tag v$version already exists!"
    exit 1
fi

# Create release branch
branch_name="release/$version"
print_info "Creating release branch: $branch_name"

git checkout -b "$branch_name"
print_success "Created and switched to branch: $branch_name"

# Ask for changes description
echo
print_info "Please describe the changes in this version:"
echo "Enter your changes (press Ctrl+D when finished):"
changes=$(cat)

if [ -z "$changes" ]; then
    print_warning "No changes description provided."
fi

# Update package.json version
print_info "Updating package.json version to $version..."
if [ -f "package.json" ]; then
    # Use node to update version in package.json
    node -e "
        const fs = require('fs');
        const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        pkg.version = '$version';
        fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
    "
    print_success "Updated package.json version to $version"
else
    print_warning "package.json not found, skipping version update"
fi

# Commit version update
if [ -f "package.json" ]; then
    git add package.json
    git commit -m "Bump version to $version"
    print_success "Committed version bump"
fi

# Create and push tag
print_info "Creating git tag: v$version"
if [ -n "$changes" ]; then
    git tag -a "v$version" -m "Release v$version

$changes"
else
    git tag -a "v$version" -m "Release v$version"
fi

print_success "Created tag: v$version"

# Push to GitHub
print_info "Pushing release branch and tag to GitHub..."
git push origin "$branch_name"
git push origin "v$version"

print_success "Pushed branch and tag to GitHub"

# Switch back to dev branch
print_info "Switching back to dev branch..."
git checkout dev

echo
print_success "Release process completed successfully!"
print_info "Release branch: $branch_name"
print_info "Tag created: v$version"
print_info "Next steps:"
print_info "  1. Create a pull request from $branch_name to main"
print_info "  2. Review and merge the pull request"
print_info "  3. Consider creating a GitHub release from the tag"