/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useRecoilValue } from 'recoil';
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useEffect, useState } from 'react';
import { prefsPopulationDataAtom, selectedPopulationTypeAtom, selectedPrefDataAtom } from '../../../Utils/recoil';
import { dataForGraph } from '../../../types';
import { populationTypeList } from '../../../Utils/populationType';

const PrefGraph = () => {
  const selectedPopulation = useRecoilValue(selectedPopulationTypeAtom);
  const prefsPopulationData = useRecoilValue(prefsPopulationDataAtom);
  const selectedPref = useRecoilValue(selectedPrefDataAtom);
  const [graphData, setGraphData] = useState<dataForGraph>({});
  useEffect(() => {
    console.log('prefsPopulationData is', prefsPopulationData);
    console.log('selectedPref is', selectedPref);
    const tmp: dataForGraph = {};
    populationTypeList.forEach((typeName) => {
      const list: { year: number; [a: string]: number }[] = [];
      // eslint-disable-next-line @typescript-eslint/no-array-constructor
      new Array().fill(0).forEach((a, index) => {
        const year = 1980 + index * 5;
        const tmp2: { year: number; [a: string]: number } = { year };
        selectedPref.forEach((pref) => {
          const tmp3 = prefsPopulationData[pref.prefName]
            .find((data) => data.populationType === typeName)
            ?.data.find((data) => data.year === year)?.value;
          if (tmp3) {
            tmp2[pref.prefName] = tmp3;
          }
        });
        list.push(tmp2);
      });
      tmp[typeName] = list;
    });
    console.log('tmp is', tmp);
    setGraphData(tmp);
  }, [prefsPopulationData]);
  useEffect(() => {
    console.log('graphData is', graphData);
  }, [graphData]);
  return (
    <ResponsiveContainer height="60%" maxHeight={400} width={window.innerWidth}>
      {/* <Line /> */}
      <LineChart data={graphData[selectedPopulation]} margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default PrefGraph;
