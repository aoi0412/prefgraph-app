import MainPageMenu from './Components/MainPageMenu';

const MainPage = () => {
  const a = true;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'green',
        height: window.innerHeight,
      }}
    >
      <MainPageMenu />
      page1
    </div>
  );
};

export default MainPage;
