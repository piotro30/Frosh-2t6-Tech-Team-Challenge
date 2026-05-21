// Import the schedule data from the JSON file — you can use it like a regular JS array
import scheduleData from './schedule_data.json';
import './App.css';
import uoftlogo from './uoftlogo.png';



function load_page(){

  var frosh_color = "rgb(100,40,130)"
  var dark_gray = "rgb(50,50,50)"


  document.body.style.backgroundColor = dark_gray;

}

function formatTime(timeStr) {
  if (!timeStr || timeStr.trim() === "") return "";

  // remove "a1/p1" to replace with am/pm later
  let cleaned = timeStr
  .replace("a1/p1", "")
  .trim();


  // Otherwise try parsing 24-hour or messy formats
  const [hours, minutes] = cleaned.split(":").map(Number);

  if (isNaN(hours)) return cleaned;

  const period = hours >= 12 ? "PM" : "AM";
  const hour12 = ((hours + 11) % 12) + 1;
  // Converts 24 hour time into 12 hr time

  // If already in "7:00 PM" format, just return it
  if (cleaned.includes("AM") || cleaned.includes("PM")) {
    return cleaned;
  }


  return `${hour12}:${minutes?.toString().padStart(2, "0") || "00"} ${period}`;
}

function App() {

  const days = Object.keys(scheduleData);

  return (
    <div>

    <img
      src={uoftlogo}

      className="corner-image"
    />


    <h2 className="title">F!rosh Week Schedule</h2>

    <div className="schedule-grid">

    {days.map((day) => (
      <div key={day} className="day-column">

      <h3 className="day-title">{day}</h3>

      {scheduleData[day].map((event, i) => (
        <div
        key={i}
        className={`event-box ${event.Color} tooltip`}
        >
        <div className="event-name">
        {event.Link ? (
          <a
          href={event.Link}
          target="_blank"
          rel="noopener noreferrer"
          className="event-link"
          >
          {event["Event Name"]}
          </a>
        ) : (
          event["Event Name"]
        )}
        </div>
        {event["Event Location"] && event["Event Location"].trim() !== "" &&(
          <h3 className={`event-location ${event.Color}`}>{
            event["Event Location"]}
            </h3>
        )}


        {event["Event Description"] && event["Event Description"].trim() !== "" &&(
        <div className="tooltip-text">
        {event["Event Description"]}
        </div>)}



        {event["Start Time"] && event["Start Time"].trim() && (
          <div className="event-time">
          {formatTime(event["Start Time"])} – {formatTime(event["End Time"])}
          </div>
        )}

        </div>
      ))}

      </div>
    ))}

    </div>

    </div>
  );
}

load_page()

export default App;
