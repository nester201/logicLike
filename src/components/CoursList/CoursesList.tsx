import { useEffect, useState } from 'react';
import { useTagsCourseContext } from '../../hooks/useDialogContext.ts';
import { getCoursesByTag } from '../../services/course/getCoursesByTag.ts';
import { ICourse } from '../../interfaces/ICourse.ts';
import CoursesListItem from './CoursesListItem.tsx';
import './CoursesList.scss';

const CoursesList = () => {
  const { activeTag } = useTagsCourseContext();
  const [courses, setCourses] = useState<ICourse[]>([]);

  useEffect(() => {
    (async () => {
      const courses = await getCoursesByTag(activeTag);
      setCourses(courses);
    })();
  }, [activeTag]);

  return (
    <div className={'courses-list-container'}>
      {courses.map(item => (
        <CoursesListItem key={item.id} course={item} />
      ))}
    </div>
  );
};

export default CoursesList;
