import { ReactNode, memo } from 'react';

type TextNode = {
  text: string;
  bold?: boolean;
  emphasize?: boolean;
  code?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
};

type SerializedTextProps = { node: TextNode };

const SerializedText = ({ node }: SerializedTextProps) => {
  if (node.text === '') return <br />;

  let text: ReactNode = node.text;

  if (node.bold) text = <strong>{text}</strong>;
  if (node.emphasize) text = <em>{text}</em>;
  if (node.code) text = <code>{text}</code>;
  if (node.italic) text = <i>{text}</i>;
  if (node.underline) text = <u>{text}</u>;
  if (node.strikethrough) text = <s>{text}</s>;

  return text;
};

export default memo(SerializedText);
export type { SerializedTextProps, TextNode };
