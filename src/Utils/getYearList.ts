export const getYearList = () => {
  const yearList: string[] = [];

  for (let i = 0; i < 13; i += 1) {
    yearList.push(`${1980 + i * 5}`);
  }
  return yearList;
};
