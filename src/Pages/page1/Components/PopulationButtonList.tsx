import { populationTypeList } from '../../../Utils/defaultDatas';
import PopulationButton from './PopulationButton';

const PopulationButtonList = () => (
  <div style={{ padding: '20px', backgroundColor: 'white' }}>
    {populationTypeList.map((typeName) => (
      <PopulationButton typeName={typeName} />
    ))}
  </div>
);

export default PopulationButtonList;
