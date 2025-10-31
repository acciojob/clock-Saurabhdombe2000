//your JS code here. If required.
 // Function to update the timer every second
function updateTimer() {
	const now = new Date();   // get current date and time

	 // Format date and time
	const date = now.toLocaleDateString();  // e.g. 10/31/2025
	const time = now.toLocaleTimeString();  // e.g. 09:58:10 AM

	// Display in the <p> tag
	document.getElementById("timer").textContent = `${date}, ${time}`;
}
	// Call it once immediately to show time right away
	updateTimer();

   // Then update every 1 second
   setInterval(updateTimer, 1000);

