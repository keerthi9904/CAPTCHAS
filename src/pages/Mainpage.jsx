import Meals from "../components/Meals.jsx";
import ScarcitySidebar from "../components/ScarcitySidebar.jsx";
import ChatbotGreeting from "../components/ChatbotGreeting.jsx";

function Mainpage() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 4, overflowY: "auto" }}>
        <Meals />
      </div>
      <div style={{ flex: 1, borderLeft: "1px solid #ccc", backgroundColor: "#f9f9f9" }}>
        <ScarcitySidebar />
      </div>
      <ChatbotGreeting />
    </div>
  );
}

export default Mainpage;
