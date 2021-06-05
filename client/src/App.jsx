import React from "react";
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
import Auth from "./hoc/Auth";
import PlayMusic from "./page/PlayMusic";
import AudioProvider from "./context/AudioProvider";
import Splash from "./page/Splash";

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
  const [isSplashRendered, setIsSplashRendered] = React.useState(false);

  React.useEffect(() => {
    const socialLogin = window.sessionStorage.getItem("socialLogin");
    if (socialLogin === null) {
      setTimeout(() => {
        setIsSplashRendered(true);
      }, 2000);
    } else {
      setIsSplashRendered(true);
    }
  }, []);

  if (!isSplashRendered) {
    return <Splash />;
  }

  return (
    <>
      <AudioProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Auth(Trending)} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/write" exact component={Auth(DiaryWrite)} />
            <Route path="/history/music" exact component={Auth(MusicHistory)} />
            <Route path="/history/diary" exact component={Auth(DiaryHistory)} />
            <Route path="/history/diary/:id" component={Auth(DiaryDetail)} />
            <Route path="/menu" exact component={Auth(MenuPage)} />
            <Route path="/mypage" component={Auth(MyPage)} exact />
            <Route path="/play" exact component={Auth(PlayMusic)} />
            <Route path="/splash" component={Auth(Splash)} />
          </Switch>
        </BrowserRouter>
      </AudioProvider>
    </>
  );
}

export default App;
