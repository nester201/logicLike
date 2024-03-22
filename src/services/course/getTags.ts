import { ICourse } from '../../interfaces/ICourse.ts';
import { API_COURSE } from '../../constants/api.ts';

export async function getTags() {
  try {
    const response = await fetch(API_COURSE);
    if (!response.ok) {
      new Error('Network response was not ok');
    }
    const data: ICourse[] = await response.json();
    const allTags = data.map(course => course.tags).flat();
    const tags = allTags.filter((tag, index, self) => self.indexOf(tag) === index);
    return tags;
  } catch (error) {
    console.error('Problem with fetch operation:', error);
    return [];
  }
}
