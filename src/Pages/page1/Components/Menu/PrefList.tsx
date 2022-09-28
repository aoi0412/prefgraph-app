import { FC, useState } from 'react';
import { prefData } from '../../../../types';
import PrefItem from './PrefItem';

const PrefList: FC = () => {
  const [prefDataList, setPrefDataList] = useState<prefData[]>([]);
  return (
    <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', borderTop: 'solid 1px gray' }}>
      {prefDataList.map((data) => (
        <PrefItem data={data} />
      ))}
    </div>
  );
};

export default PrefList;
