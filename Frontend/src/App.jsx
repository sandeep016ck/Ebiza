import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import ProjectC from "./Components/ProjectC";
import ProjectD from "./Components/ProjectD";
import Sign_up from "./Components/Sign_up";
import Sign_in from "./Components/Sign_in";

function App() {
  const [content, setContent] = useState("home");

  const renderContent = () => {
    switch (content) {
      case "home":
        return (
          <>
            <div id="home">
              <MainSection />
            </div>
            <div id="projects">
              <ProjectC />
            </div>
            <ProjectD
              productHed="Flexbar: A Versatile & Fully Customizable Touch-Bar Solution"
              productDesc="Streamline and customize interactions with software, games, and streaming for Win & Mac—keeping you focused, in control, and connected."
              productImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1t0wW_ju7zxaYjNSO-PFWOZgXduksbrT8QQ&s"
              fundTobeRaised="30,000"
              fundRaised="100,000"
            />
          </>
        );
      case "sign_in":
        return <Sign_in onBack={() => setContent("home")} />;
      case "sign_up":
        return <Sign_up onBack={() => setContent("home")} />;
      default:
        return <MainSection />;
    }
  };

  return (
    <div className="bg-gradient-to-r from-customStart to-customEnd flex flex-col">
      {/* Conditionally render Header */}
      <Header onNavigate={setContent} />

      {/* Render content based on state */}
      {renderContent()}
    </div>
  );
}

export default App;
