import useCardOptions from '@hooks/cardOptions/useCardOptions';
import useCardStyles from '@hooks/cardOptions/useCardStyles';
import { FC } from 'react';
import { NameText } from './styles';

const Name: FC = () => {
  const { name } = useCardOptions();
  const { nameOutline, nameTextColor } = useCardStyles();

  if (!name) return null;

  return (
    <NameText $outline={nameOutline} $color={nameTextColor}>
      {name}
    </NameText>
  );
};

export default Name;