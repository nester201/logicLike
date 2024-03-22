import { createContext, FC, PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import { ITagCourseProvider } from '../interfaces/ITagCourseProvider.ts';
import { getTags } from '../services/course/getTags.ts';

export const TagsCourseContext = createContext({} as ITagCourseProvider);

export const TagsCourseProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeTag, setActiveTag] = useState<string>('Все темы');
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const tags = await getTags();
      setTags(tags);
    })();
  }, []);

  const onClickTag = useCallback(
    (tag: string) => {
      setActiveTag(tag);
    },
    [setActiveTag]
  );

  const value = useMemo(
    () => ({
      tags,
      activeTag,
      onClickTag,
    }),
    [activeTag, onClickTag, tags]
  );

  return <TagsCourseContext.Provider value={value}>{children}</TagsCourseContext.Provider>;
};
