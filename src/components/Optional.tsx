import Code from "./Code";
import Back from "./Back";
import Description from "./Description";

const Optional = () => {
  const code1 = `
    type Article = {
      author: string;
      content: string;
      title: string;
    }
  `;
  const code2 = `
    type ArticleOptional = {
      author?: string;
      content?: string;
      title: string;
    }
  `;

  const code3 = `
    type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
    type ArticleOptional = Optional<Article, 'author' | 'content'>
  `;

  const description = `
    Omit<T, K> would remove K from T, Pick<T, K> from pick K from T, and add Partial will make K optional
    so Omit<T, K> will have all the fields except K, and Partial<Pick<T, K>> will make K as optional
  `;

  return (
    <>
      <Back />
      <Code code={code1} />
      <Description>
        If we already have one type as above, and now we need to have a new type
        as below
      </Description>
      <Code code={code2} />
      <Description>To implement that, we can do following</Description>
      <Code code={code3} />
      <Description>{description}</Description>
    </>
  );
};

export default Optional;
