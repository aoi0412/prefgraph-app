import { css } from '@emotion/css';
import { FC } from 'react';
import { populationTypeList } from '../../../Utils/defaultDatas';
import PopulationButton from './PopulationButton';

const PopulationButtonList: FC = () => (
  <div className={styles.container}>
    {populationTypeList.map((typeName) => (
      <PopulationButton typeName={typeName} />
    ))}
  </div>
);

const styles = {
  container: css`
    padding: 20px;
    background-color: white;
  `,
};

export default PopulationButtonList;
