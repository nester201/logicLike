import { FC } from 'react';
import { ICourse } from '../../interfaces/ICourse.ts';
import './CoursesItemList.scss';

type Props = {
  course: ICourse;
};

const CoursesListItem: FC<Props> = ({ course }) => {
  return (
    <div className={'courses-item-list-container'}>
      <div className={'courses-item-list-image-wrapper'} style={{ backgroundColor: `${course.bgColor}` }}>
        <img src={course.image} alt="Изображение" className={'courses-item-list-image'} />
      </div>
      <div className={'courses-item-list-text-wrapper'}>{course.name}</div>
    </div>
  );
};

export default CoursesListItem;
