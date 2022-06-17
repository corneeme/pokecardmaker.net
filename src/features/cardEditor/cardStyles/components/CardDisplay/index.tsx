import {
  baseFontSize,
  cardId,
  cardImgAspect,
  cardImgWidth,
} from '@cardEditor/cardStyles/constants';
import { FC, useMemo } from 'react';
import { useDebounce, useElementSize } from 'usehooks-ts';
import Debug from '../blocks/Debug';
import Moves from '../blocks/Moves';
import NameBar from '../blocks/NameBar';
import Hitpoints from '../blocks/NameBar/fields/Hitpoints';
import CardImage from '../fields/CardImage';
import DexStats from '../fields/DexStats';
import PrevolveImg from '../fields/PrevolveImg';
import PrevolveName from '../fields/PrevolveName';
import SvgHelpers from '../fields/SvgHelpers';
import { CardContainer } from './styles';

const CardDisplay: FC = () => {
  const [squareRef, { width }] = useElementSize();
  const debouncedWidth = useDebounce<number>(width, 250);

  const fontSize = useMemo<number>(
    () =>
      debouncedWidth
        ? debouncedWidth / (cardImgWidth / baseFontSize)
        : baseFontSize,
    [debouncedWidth],
  );

  const height = useMemo<number>(
    () => debouncedWidth * cardImgAspect,
    [debouncedWidth],
  );

  return (
    <CardContainer
      id={cardId}
      $fontSize={fontSize}
      $height={height}
      ref={squareRef}
    >
      <Debug />
      <SvgHelpers />
      <NameBar />
      <Hitpoints />
      <PrevolveName />
      <PrevolveImg />
      <DexStats />
      <Moves />
      <CardImage />
    </CardContainer>
  );
};

export default CardDisplay;