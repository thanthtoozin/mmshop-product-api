export function truncateDescription(description: string): string {
  // Split the description into words
  const words = description.trim().split(/\s+/);

  // If description has 10 or fewer words, return original
  if (words.length <= 10) {
    return description;
  }

  // Take first 10 words and join them back with spaces
  const truncated = words.slice(0, 10).join(' ');

  // Return truncated text with ellipsis
  return `${truncated}...`;
}
