import { useContext } from 'react';
import { TagsCourseContext } from '../providers/TagsCourseProvider.tsx';

export const useTagsCourseContext = () => useContext(TagsCourseContext);
