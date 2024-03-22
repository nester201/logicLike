import './TagsList.scss';
import TagsListItem from './TagsListItem.tsx';
import { useTagsCourseContext } from '../../hooks/useDialogContext.ts';

const TagsList = () => {
  const { tags } = useTagsCourseContext();

  return (
    <div className={'tags-list-container'}>
      <TagsListItem item={'Все темы'} />
      {tags.map((item, index) => (
        <TagsListItem key={index} item={item} />
      ))}
    </div>
  );
};

export default TagsList;
