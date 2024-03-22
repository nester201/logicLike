import './styles/main.scss';
import TagsList from './components/TagsList/TagsList.tsx';
import { TagsCourseProvider } from './providers/TagsCourseProvider.tsx';
import CoursesList from './components/CoursList/CoursesList.tsx';

function App() {
  return (
    <div className={'course-page'}>
      <TagsCourseProvider>
        <TagsList />
        <CoursesList />
      </TagsCourseProvider>
    </div>
  );
}

export default App;
