import { Switch, Route, BrowserRouter } from "react-router-dom";
import Trending from "./page/Trending";
import Login from "./page/Login";
import DiaryWrite from "./page/DiaryWrite";
import MusicHistory from "./page/MusicHistory";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import DiaryHistory from "./page/DiaryHistory";
import DiaryDetail from "./page/DiaryDetail";
import MenuPage from "./page/MenuPage";
import MyPage from "./page/MyPage";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'NanumSquare', sans-serif !important;
  }
  html, body {
    width: 100vw;
    min-height: 100%;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Trending />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/write" exact>
            <DiaryWrite />
          </Route>
          <Route path="/history/music" exact>
            <MusicHistory />
          </Route>
          <Route path="/history/diary" exact>
            <DiaryHistory />
          </Route>
          <Route path="/history/diary/:id">
            <DiaryDetail />
          </Route>
          <Route path="/menu" exact>
            <MenuPage />
          </Route>
          <Route path="/mypage" exact>
            <MyPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
