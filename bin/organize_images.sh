#!/bin/bash
# Change directory to where your images are located
cd /Users/mikeolie/projects/work/zub/pat-bbq-store/public/slideshow || { echo "Directory not found"; exit 1; }

# List files (for debugging, optional)
echo "Files in directory:"
ls -l

# If your images are .jpeg files, loop through them
i=1
for file in *.jpeg; do
  # Check if the pattern didn't match any file (i.e., file remains as '*.jpeg')
  if [[ "$file" == "*.jpeg" ]]; then
    echo "No .jpeg files found."
    exit 1
  fi

  # Rename the file to slide-<number>.jpeg
  mv "$file" "slide-$i.jpeg"
  ((i++))
done

