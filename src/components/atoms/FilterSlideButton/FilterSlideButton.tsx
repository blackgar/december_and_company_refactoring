import MakeTag from '@atoms/MakeTag/MakeTag';
import { filterOpenButtonIcon } from '@common/constants/icon';
import { filterOpenButtonStyle } from '@common/styles/filterstyle';
import { FilterOpenButtonProps } from '@common/types/Filter';

const FilterSlideButton = ({ setOpen, open, style, children }: FilterOpenButtonProps) => {
  return (
    <MakeTag tagName="button" style={style} handleClick={setOpen} value={open}>
      {children}
    </MakeTag>
  );
};

export default FilterSlideButton;
