import React from "react";

// Main App component
const App: React.FC = () => {
  // Extract query parameters from the URL
  const query = new URLSearchParams(window.location.search);
  // Get the Telegram ID from the query parameters
  const telegramId = query.get("telegramId");

  // Check if the Telegram ID is provided in the URL
  if (!telegramId) {
    // If not, display an error message
    return <div>Unknow user</div>;
  }

  // Render the ApolloProvider and CoinCounter component
  return (
    <div class="v14_20"></div>
  );
};

export default App;
