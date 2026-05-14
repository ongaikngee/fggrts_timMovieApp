import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard movie={{ title: "Mandolorian", url:"https://mockmind-api.uifaces.co/content/cartoon/32.jpg", released_date: "2024" }} />
      <MovieCard movie={{ title: "Mandolorian2", url:"https://mockmind-api.uifaces.co/content/cartoon/22.jpg", released_date: "2024" }} />
    </>
  );
}

export default App;
