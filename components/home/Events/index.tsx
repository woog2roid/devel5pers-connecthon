import Carousel from 'react-material-ui-carousel';
import { Image } from './style';

export default function Events() {
  const items = [
    'https://mediahub.seoul.go.kr/uploads/mediahub/2021/04/pEMzfCNbXjPIYqcfBJERoYJfyzLjeEsQ.png',
    'https://mediahub.seoul.go.kr/uploads/mediahub/2021/06/kXNfXEGBICWYhTYflcuyzRtdrulfjYDM.png',
  ];
  return (
    <Carousel>
      {items.map((item, i) => (
        <Image key={i}>
          <img src={item} />
        </Image>
      ))}
    </Carousel>
  );
}
