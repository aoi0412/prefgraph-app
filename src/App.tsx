import { css } from '@emotion/css';
import SplashScreen from './Components/SplashScreen';
import { useFetchPrefList } from './Hooks/useApiHooks';
import MainPage from './Pages/page1/MainPage';

const App = () => {
  const result = useFetchPrefList();
  return (
    <div className={styles.container}>
      <SplashScreen message={result.error ? result.error.description : ''} isLoading={result.isLoading} />
      <MainPage />
    </div>
  );
};

const styles = {
  container: css`
    height: 100vh;
    width: 100vw;
    background-color: white;
    overflow: hidden;
  `,
  splashScreen: css`
    transition: background-color 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0);
    width: 100vw;
    height: 100vh;
    z-index: 10;
    position: absolute;
    pointer-events: none;
  `,
  splashScreenIsOpen: css`
    pointer-events: auto;
    background-color: white;
  `,
};
export default App;
