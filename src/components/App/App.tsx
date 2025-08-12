import AnswerProvider from "../../context/Providers"
import Game from "../Game/Game"
import Header from "../Header/Header"

function App() {

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <AnswerProvider>
          <Game />
        </AnswerProvider>
      </div>
    </div>
  )
}

export default App
