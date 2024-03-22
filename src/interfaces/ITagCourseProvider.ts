export interface ITagCourseProvider {
  tags: string[];
  activeTag: string;
  onClickTag: (teg: string) => void;
}
