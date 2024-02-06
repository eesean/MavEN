/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tNSvp0OuWTO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function Component() {
  return (
    <div className="w-full h-full p-6 md:p-10 bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Volunteer Dashboard</h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          <div className="space-y-2">
            <label htmlFor="activity-name">Activity Name</label>
            <input id="activity-name" placeholder="Enter activity name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="activity-date">Date</label>
            
          </div>
          <div className="space-y-2">
            <label htmlFor="activity-time">Time</label>
            <input id="activity-time" type="time" />
          </div>
          <div className="space-y-2">
            <label htmlFor="activity-hours">Hours Spent</label>
            <input id="activity-hours" min="0" type="number" />
          </div>
        </div>
        <button className="w-full md:w-auto">Add Entry</button>
        <div className="border rounded-lg w-full overflow-auto">
          <table>
          
          </table>
        </div>
      </div>
    </div>
  )
}

function CalendarDaysIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}
