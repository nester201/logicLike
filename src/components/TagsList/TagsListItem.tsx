import { FC, useCallback, useMemo } from 'react';
import './TagsListItem.scss';
import { useTagsCourseContext } from '../../hooks/useDialogContext.ts';

type Props = {
  item: string;
};

const TagsListItem: FC<Props> = ({ item }) => {
  const { activeTag, onClickTag } = useTagsCourseContext();

  const onClick = useCallback(() => {
    onClickTag(item);
  }, [item, onClickTag]);

  const style = useMemo(() => `tags-list-item ${activeTag == item ? 'active' : ''}`, [activeTag, item]);

  return (
    <div onClick={onClick} className={style}>
      {item}
    </div>
  );
};

export default TagsListItem;
