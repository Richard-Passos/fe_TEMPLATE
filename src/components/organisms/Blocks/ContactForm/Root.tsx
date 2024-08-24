'use client';

import { forwardRef } from 'react';

import { yFullScrollAnim } from '@/animations/scroll';
import { Lines, ScrollAnimate, Text, Title } from '@/components/atoms';
import { TextProps } from '@/components/atoms/Text';
import { TitleProps } from '@/components/atoms/Title';
import ContactForm, {
  ContactFormProps
} from '@/components/organisms/Forms/Contact';
import { cn } from '@/utils';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';

type ContactFormBlockOrganismOwnProps = {
  data: Pick<ContactFormProps, 'fields' | 'to' | 'optionalLabel'> & {
    title: TitleProps['children'];
    description: TextProps['children'];
  };
};

type ContactFormBlockOrganismProps = ContactFormBlockOrganismOwnProps &
  Omit<CleanLayoutBlockProps, keyof ContactFormBlockOrganismOwnProps>;

const ContactFormBlockOrganism = (
  { data, className, ...props }: ContactFormBlockOrganismProps,
  ref: ContactFormBlockOrganismProps['ref']
) => {
  return (
    <CleanLayoutBlock
      className={cn(
        'grid w-9/10 max-w-screen-xl gap-xl sm:grid-cols-12',
        className
      )}
      ref={ref}
      {...props}
    >
      <div className='relative size-full overflow-hidden bg-white dark:bg-black sm:col-span-5'>
        <ScrollAnimate config={yFullScrollAnim}>
          <Lines className='!opacity-60 [background-size:83.333px_66.666px]' />
        </ScrollAnimate>

        <span className='pointer-events-none absolute inset-0 rounded-inherit border opacity-60' />
      </div>

      <div className='sm:col-span-7'>
        <Title
          className='sm:max-w-md'
          order={3}
        >
          {data.title}
        </Title>

        <Text className='mt-xs text-sm text-dimmed sm:max-w-sm'>
          {data.description}
        </Text>

        <ContactForm
          className='mt-xl'
          fields={data.fields}
          optionalLabel={data.optionalLabel}
          to={data.to}
        />
      </div>
    </CleanLayoutBlock>
  );
};

export default forwardRef(ContactFormBlockOrganism);
export type { ContactFormBlockOrganismProps };
