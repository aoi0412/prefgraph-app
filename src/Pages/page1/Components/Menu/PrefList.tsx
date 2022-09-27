import PrefItem from './PrefItem';

const PrefList = () => (
  <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', borderTop: 'solid 1px gray' }}>
    {[1, 1, 1, 1, 1].map(() => (
      <PrefItem />
    ))}
  </div>
);

export default PrefList;
