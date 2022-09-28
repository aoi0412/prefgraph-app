import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { prefDataListAtom } from '../../../../Utils/recoil';
import PrefItem from './PrefItem';

const PrefList: FC = () => {
  const prefDataList = useRecoilValue(prefDataListAtom);
  return (
    <div
      style={{
        overflowY: 'scroll',
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        borderTop: 'solid 1px gray',
      }}
    >
      {prefDataList.map((data) => (
        <PrefItem data={data} />
      ))}
    </div>
  );
};

export default PrefList;
