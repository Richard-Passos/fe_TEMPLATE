import { ReactNode, forwardRef } from 'react';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { Link, Select, TextInput, Textarea, Title } from '@/components/atoms';
import { PaperPlaneIcon } from '@/components/atoms/Icon/icons';
import { SelectProps } from '@/components/atoms/Select';
import { TitleProps } from '@/components/atoms/Title';
import { Action, Form } from '@/components/molecules';
import { FormRootProps } from '@/components/molecules/Form';
import { Field } from '@/types';
import { cn } from '@/utils';
import { sendEmail } from '@/utils/actions';

type ContactFormOrganismOwnProps = {
  optionalLabel: ReactNode;
  fields: {
    name: Field<['min']>;
    email: Field<['email']>;
    subject: Field;
    service: Field & Pick<SelectProps, 'data'>;
    message: Field<['min', 'max']>;
    submit: {
      label: string;
    };
  };
  to: {
    label: TitleProps['children'];
    email: string;
    subject: string;
  };
  messages: {
    loading: string;
    success: string;
    error: string;
  };
};

type ContactFormOrganismProps = ContactFormOrganismOwnProps &
  Omit<
    FormRootProps,
    keyof ContactFormOrganismOwnProps | 'schema' | 'defaultValues'
  >;

const ContactFormOrganism = (
  {
    optionalLabel,
    messages,
    to,
    fields,
    className,
    ...props
  }: ContactFormOrganismProps,
  ref: ContactFormOrganismProps['ref']
) => {
  const defaultValues = {
      name: fields.name.defaultValue,
      email: fields.email.defaultValue,
      subject: fields.subject.defaultValue,
      service: fields.service.defaultValue,
      message: fields.message.defaultValue
    },
    schema = z.object({
      name: z.string().trim().min(2, fields.name.errors.min),
      email: z.string().trim().email(fields.email.errors.email),
      subject: z.string().trim().optional(),
      service: z.any().optional(),
      message: z
        .string()
        .trim()
        .min(2, fields.message.errors.min)
        .max(300, fields.message.errors.max)
    });

  return (
    <Form.Root
      action={async (values) => {
        toast.promise(sendEmail(values), messages);
      }}
      className={cn('grid sm:grid-cols-12', className)}
      defaultValues={defaultValues}
      ref={ref}
      schema={schema}
      {...props}
    >
      <div className='relative right-px top-px -mr-px -mt-px flex h-fit items-center border bg-white p-xs dark:bg-dark-8 sm:col-span-full'>
        <Title
          component='h3'
          order={6}
        >
          {to.label}:&nbsp;
          <Link
            className='text-[1em]'
            href={`mailto:${to.email}?subject=${to.subject}`}
          >
            {to.email}
          </Link>
        </Title>
      </div>

      <Form.Control name='name'>
        <TextInput
          className='relative right-px top-px -mr-px -mt-px border bg-white p-xs dark:bg-dark-8 sm:col-span-6'
          label={fields.name.label}
          placeholder={fields.name.placeholder}
          size='md'
          variant='filled'
        />
      </Form.Control>

      <Form.Control name='email'>
        <TextInput
          className='relative right-px top-px -mr-px -mt-px border bg-white p-xs dark:bg-dark-8 sm:col-span-6'
          label={fields.email.label}
          placeholder={fields.email.placeholder}
          size='md'
          type='email'
          variant='filled'
        />
      </Form.Control>

      <Form.Control name='subject'>
        <TextInput
          className='relative right-px top-px -mr-px -mt-px border bg-white p-xs dark:bg-dark-8 sm:col-span-6'
          label={
            <>
              {fields.subject.label}&nbsp;
              <span className='text-dimmed'>({optionalLabel})</span>
            </>
          }
          placeholder={fields.subject.placeholder}
          size='md'
          variant='filled'
        />
      </Form.Control>

      <Form.Control name='service'>
        <Select
          className='relative right-px top-px -mr-px -mt-px border bg-white p-xs dark:bg-dark-8 sm:col-span-6'
          data={fields.service.data}
          label={
            <>
              {fields.service.label}&nbsp;
              <span className='text-dimmed'>({optionalLabel})</span>
            </>
          }
          placeholder={fields.service.placeholder}
          size='md'
          variant='filled'
        />
      </Form.Control>

      <Form.Control name='message'>
        <Textarea
          className='relative right-px top-px -mr-px -mt-px border bg-white p-xs dark:bg-dark-8 sm:col-span-full md:col-span-9'
          label={fields.message.label}
          placeholder={fields.message.placeholder}
          size='md'
          variant='filled'
        />
      </Form.Control>

      <div className='relative right-px top-px -mr-px -mt-px w-fit border bg-white p-xs dark:bg-dark-8 sm:col-span-4 md:col-span-3 md:aspect-video md:size-9/10'>
        <Form.Submit>
          <Action
            className='md:size-full'
            limit={{ x: 0.2, y: 0.2 }}
          >
            <PaperPlaneIcon className='absolute aspect-square h-2/3 max-md:hidden' />

            <span className='md:sr-only'>{fields.submit.label}</span>
          </Action>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};

export default forwardRef(ContactFormOrganism);
export type { ContactFormOrganismProps };
