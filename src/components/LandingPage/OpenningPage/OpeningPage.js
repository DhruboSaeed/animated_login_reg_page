import React from "react";
import FeedPage from "../FeedPage/FeedPage"
import Footer from "../Footer/Footer"
import "../OpenningPage/style.css";

function OpeningPage() {
  return (
    <div className="feed-section">
      <FeedPage />
      <Footer />
    </div>
  );
}

export default OpeningPage;
