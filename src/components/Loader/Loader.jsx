import ThreeDots from 'react-spinners/DotLoader';
import { LoaderWrapp } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapp>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        aria-label="three-dots-loading"
      />
    </LoaderWrapp>
  );
};