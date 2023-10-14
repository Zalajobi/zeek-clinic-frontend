import clsx from 'clsx';
import {
  textAlignClassMap,
  textBreakClassMap,
  textIndentClassMap,
  textSizeClassMap,
  textSpacingClassMap,
  textStyleClassMap,
  textVariantNumericClassMap,
} from '@lib/constants/textClassMaps';
import {
  textAlign,
  textBreak,
  textIndent,
  textSize,
  textSpacing,
  textStyle,
  textVariantNumeric,
} from '@lib/types';

interface TextProps {
  text: string;
  weight?: number;
  className?: string;
  size?: textSize;
  textAlign?: textAlign;
  textStyle?: textStyle;
  numVariant?: textVariantNumeric;
  textSpace?: textSpacing;
  textIndent?: textIndent;
  textBreak?: textBreak;
  style?: string;
  color?: string;
}

const Text = ({
  text,
  weight = 500,
  className = '',
  size = 'base',
  textAlign = 'left',
  textStyle = 'not-italic',
  numVariant = 'normal',
  textSpace = 'normal',
  textIndent = '0',
  textBreak = 'normal',
  style = 'normal',
  color = 'black',
}: TextProps) => {
  return (
    <p
      style={{
        fontWeight: weight,
        fontStyle: style,
        color: color,
      }}
      className={clsx(
        'leading-7 !no-underline font-nunito',
        // "leading-7 !no-underline text-[#FFFFFF] font-nunito",
        textAlignClassMap[textAlign],
        textSizeClassMap[size],
        textStyleClassMap[textStyle],
        textVariantNumericClassMap[numVariant],
        textSpacingClassMap[textSpace],
        textIndentClassMap[textIndent],
        textBreakClassMap[textBreak],
        className
      )}>
      {text}
    </p>
  );
};

export default Text;
