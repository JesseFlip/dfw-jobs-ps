/** Midnight today in the viewer's local timezone. */
function startOfToday(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

/**
 * Parses an ISO `YYYY-MM-DD` string as a local date. `new Date('2026-09-25')`
 * would be parsed as UTC midnight, which lands on the previous day for viewers
 * west of Greenwich — including DFW.
 */
function parseLocalDate(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}

/** Whole days from today until `dateString`; negative once the deadline has passed. */
export function daysUntil(dateString: string): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((parseLocalDate(dateString).getTime() - startOfToday().getTime()) / msPerDay);
}

export function formatDate(dateString: string): string {
  return parseLocalDate(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function deadlineLabel(dateString: string): string {
  const days = daysUntil(dateString);
  if (days < 0) return 'Closed';
  if (days === 0) return 'Ends Today';
  if (days === 1) return '1 day left';
  return `${days} days left`;
}

/** Deadlines within a day are highlighted in the UI. */
export function isUrgent(dateString: string): boolean {
  const days = daysUntil(dateString);
  return days >= 0 && days <= 1;
}
