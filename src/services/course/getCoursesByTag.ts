import { API_COURSE } from '../../constants/api.ts';
import { ICourse } from '../../interfaces/ICourse.ts';

export const getCoursesByTag = async (tag: string) => {
  try {
    const response = await fetch(API_COURSE);
    if (!response.ok) {
      new Error('Network response was not ok');
    }
    const data: ICourse[] = await response.json();
    if (tag === 'Все темы') {
      return data;
    }
    return data.filter(course => course.tags.includes(tag));
  } catch (error) {
    console.error('Problem with fetch operation:', error);
    return [];
  }
};
