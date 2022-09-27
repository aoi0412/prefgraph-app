export const getDevicemode = (size: number): 'phone' | 'PC' | 'tablet' => {
  const breakPoint = [520, 960];

  if (size > breakPoint[1]) {
    return 'PC';
  }
  if (size > breakPoint[0]) {
    return 'tablet';
  }
  return 'phone';
};
