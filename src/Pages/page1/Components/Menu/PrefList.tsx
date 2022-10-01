import { css } from '@emotion/css';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { prefDataListAtom } from '../../../../Utils/recoil';
import PrefItem from './PrefItem';

const PrefList: FC = () => {
  const prefDataList = useRecoilValue(prefDataListAtom);
  return (
    <div className={styles.itemContainer}>
      {prefDataList.map((data) => (
        <PrefItem data={data} />
      ))}
    </div>
  );
};

const styles = {
  itemContainer: css`
    overflow-y: scroll;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    border-top: solid 1px gray;
    padding-bottom: 60px;
  `,
};

export default PrefList;
