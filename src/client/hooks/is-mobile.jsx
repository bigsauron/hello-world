
import { useMediaPredicate } from 'react-media-hook';

export default () => {
  return useMediaPredicate('(max-width: 800px)');
};
