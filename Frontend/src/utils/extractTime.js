export function extractTime(dateString) {
	const date = new Date(dateString);
	const hours = padZero(date.getHours()); // Local time
	const minutes = padZero(date.getMinutes());
	return `${hours}:${minutes}`;
}

// Helper function
function padZero(number) {
	return number.toString().padStart(2, "0");
}

export default extractTime;