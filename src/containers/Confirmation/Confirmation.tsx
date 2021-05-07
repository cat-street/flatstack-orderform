import { FC } from 'react';
import ConfirmationLayout from '../../components/ConfirmationLayout/ConfirmationLayout';

import { UserState } from '../../types/forms';

type Props = {
  data: UserState;
};

const Confirmation: FC<Props> = ({ data }: Props) => (
  <ConfirmationLayout />
);

export default Confirmation;
