import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ContentData, defaultContent } from '../types/content';

interface ContentContextType {
  content: ContentData;
  updateContent: (newContent: ContentData) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentData>(() => defaultContent);

  const updateContent = (newContent: ContentData) => {
    setContent(newContent);
    localStorage.setItem('loveWebsiteContent', JSON.stringify(newContent));
  };

  useEffect(() => {
    localStorage.setItem('loveWebsiteContent', JSON.stringify(content));
  }, [content]);

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within ContentProvider');
  }
  return context;
}
