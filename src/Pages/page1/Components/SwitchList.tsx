import OldAge from './PopulationSwitches/OldAge';
import ProductionAge from './PopulationSwitches/ProductionAge';
import Total from './PopulationSwitches/Total';
import YoungAge from './PopulationSwitches/YoungAge';

const SwitchList = () => (
  <div style={{ padding: '20px', backgroundColor: 'red' }}>
    <OldAge />
    <ProductionAge />
    <Total />
    <YoungAge />
  </div>
);

export default SwitchList;
