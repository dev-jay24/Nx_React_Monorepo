import { Badge, Card } from 'antd';

import { Wrapper } from './Style';

export const HorseTripCard = ({ totalTrip }: { totalTrip: number }) => {
  return (
    <Wrapper>
      <div className="horseTripCard">
        <Badge.Ribbon text={totalTrip > 1 ? 'Total Trips' : 'Total Trip'}>
          <Card>{totalTrip}</Card>
        </Badge.Ribbon>
      </div>
    </Wrapper>
  );
};
