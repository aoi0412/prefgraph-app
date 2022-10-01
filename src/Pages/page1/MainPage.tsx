import { css } from '@emotion/css';
import MainPageMenu from './Components/MainPageMenu';
import PrefGraph from './Components/PrefGraph';
import PopulationButtonList from './Components/PopulationButtonList';
import GraphTitle from './Components/GraphTitle';

const MainPage = () => (
  <div className={styles.container}>
    <MainPageMenu />
    <div className={styles.contentsContainer}>
      <GraphTitle />
      <div className={styles.graphContainer}>
        <PrefGraph />
      </div>
      <div className={styles.populationList}>
        <PopulationButtonList />
      </div>
    </div>
  </div>
);
const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    @media (min-width: 1000px) {
      flex-direction: row;
    }
  `,
  populationList: css`
    display: flex;
    align-self: flex-end;
  `,
  contentsContainer: css`
    margin-top: 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `,
  graphContainer: css`
    display: 'flex';
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    width: 80%;
    height: 400px;
  `,
};
export default MainPage;
