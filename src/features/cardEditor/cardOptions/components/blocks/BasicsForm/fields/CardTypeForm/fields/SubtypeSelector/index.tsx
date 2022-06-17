import { ListItemText, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { useSubtype } from '@cardEditor/cardOptions/subtype';
import { useType } from '@cardEditor/cardOptions/type';
import { useCardLogic } from '@cardEditor/cardLogic';

const SubtypeSelector: FC = () => {
  const { type } = useType();
  const { hasSubtypes, isSubtypeRequired } = useCardLogic();
  const { subtypes, subtype, setSubtype } = useSubtype();

  const handleChange = (event: SelectChangeEvent) => {
    setSubtype(Number(event.target.value) ?? undefined);
  };

  if (!hasSubtypes) return null;

  return (
    <ControlledSelector
      value={subtype?.id}
      displayName="Subtype"
      slug="subtype"
      onChange={handleChange}
    >
      {!isSubtypeRequired && (
        <MenuItem value="">
          <ListItemText primary="None" />
        </MenuItem>
      )}
      {subtypes.map(
        st =>
          st.types.includes(type.id) && (
            <MenuItem key={st.slug} value={st.id}>
              <ListItemText primary={st.displayName} />
            </MenuItem>
          ),
      )}
    </ControlledSelector>
  );
};

export default SubtypeSelector;