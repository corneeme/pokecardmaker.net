import useBaseSet from '@hooks/cardOptions/useBaseSet';
import useRarity from '@hooks/cardOptions/useRarity';
import useSubtype from '@hooks/cardOptions/useSubtype';
import useSupertype from '@hooks/cardOptions/useSupertype';
import useType from '@hooks/cardOptions/useType';
import useVariation from '@hooks/cardOptions/useVariation';
import Routes from '@routes';
import Image from 'next/image';
import { FC, useMemo } from 'react';
import fallbackCard from '@assets/fallbackCard.png';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import dot from 'dot-object';
import { getCardPath } from '@utils/getCardPath';

const CardImage: FC = () => {
  const { baseSet } = useBaseSet();
  const { supertype } = useSupertype();
  const { type } = useType();
  const { subtype } = useSubtype();
  const { variation } = useVariation();
  const { rarity } = useRarity();
  const { cardImgObj } = useCardOptions();

  const imgSrc = useMemo<string>(() => {
    const seperator = cardImgObj ? '.' : '/';
    const path = getCardPath(
      baseSet,
      supertype,
      type,
      subtype,
      variation,
      rarity,
      seperator,
    );
    if (cardImgObj) {
      const base64: string | undefined = dot.pick(`${path}.image`, cardImgObj);
      if (base64) return `data:image/png;base64,${base64}`;
      return fallbackCard.src;
    }
    return `${Routes.Assets.Cards}/${path}.png`;
  }, [cardImgObj, baseSet, supertype, type, subtype, variation, rarity]);

  if (!imgSrc) return null;
  return (
    <Image
      src={imgSrc}
      layout="fill"
      placeholder="blur"
      blurDataURL={fallbackCard.src}
    />
  );
};

export default CardImage;
