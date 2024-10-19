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
    <html><head><link href="https://fonts.googleapis.com/css?family=Allerta&display=swap" rel="stylesheet" /><link href="./css/main.css" rel="stylesheet" /><title>Document</title></head><body><div class="v14_20"><div class="v10_4"></div><div class="v14_6"></div><span class="v14_13">743 500</span><div class="v14_7"></div><div class="v14_9"></div><div class="v14_17"></div><span class="v14_19">Уровень 16</span><span class="v14_12">Работа и контракты</span><span class="v14_16">Доход +10</span></div></body></html>
  );
};

export default App;
