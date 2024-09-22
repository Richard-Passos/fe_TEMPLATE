'use client';

import { useSearchParams } from 'next/navigation';
import { forwardRef } from 'react';
import { z } from 'zod';

import { Button, ColorInput, NumberInput } from '@/components/atoms';
import { Form } from '@/components/molecules';
import { FormRootProps } from '@/components/molecules/Form';
import { useSetSearchParams } from '@/hooks';
import { cn, isType, times } from '@/utils';

import { SearchParams, parseSize } from '../Root';

type PixelArtFormBlockOrganismOwnProps = {
  defaults: SearchParams;
};

type PixelArtFormBlockOrganismProps = PixelArtFormBlockOrganismOwnProps &
  Omit<Partial<FormRootProps>, keyof PixelArtFormBlockOrganismOwnProps>;

const PixelArtFormBlockOrganism = (
  { defaults, className, ...props }: PixelArtFormBlockOrganismProps,
  ref: PixelArtFormBlockOrganismProps['ref']
) => {
  const searchParams = useSearchParams(),
    setSearchParams = useSetSearchParams();

  const params: Record<keyof SearchParams, string | null> = {
    size: searchParams.get('size'),
    color: searchParams.get('color')
  };

  const size = isType<SearchParams['size']>(!!params.size, params.size)
      ? parseSize(params.size)
      : defaults.size,
    color = isType<SearchParams['color']>(!!params.color, params.color)
      ? params.color
      : defaults.color;

  return (
    <aside className='relative max-w-xs grow border border-l-0 bg-body p-md py-lg'>
      <Form.Root
        className={cn('sticky top-lg flex flex-col gap-xs', className)}
        defaultValues={{
          size: defaults.size,
          color: defaults.color
        }}
        ref={ref}
        schema={z.object({
          size: z.string().min(1, 'Size Error'),
          color: z.string().trim().min(2, 'Color error')
        })}
        {...props}
      >
        <Form.Control name='size'>
          <NumberInput
            allowDecimal={false}
            allowNegative={false}
            defaultValue={size}
            label='Size:'
            max={50}
            min={2}
            onValueChange={({ formattedValue }) => {
              setSearchParams({
                size: parseSize(+formattedValue).toString()
              });
            }}
            placeholder='2 - 50'
          />
        </Form.Control>

        <Form.Control name='color'>
          <ColorInput
            defaultValue={color}
            label='Color:'
            onChangeEnd={(value) => {
              setSearchParams({ color: value });
            }}
            placeholder='#000'
          />
        </Form.Control>

        <section className='flex flex-col gap-0.5'>
          <label className='text-sm'>Used Colors:</label>

          <div className='flex flex-wrap gap-0.5'>
            {times(5, String).map((id) => (
              <Button
                className='aspect-square px-0'
                data-color={id}
                key={id}
              />
            ))}
          </div>
        </section>

        <Button className='mt-md'>Dowload Pixel Art</Button>
      </Form.Root>
    </aside>
  );
};

export default forwardRef(PixelArtFormBlockOrganism);
export type { PixelArtFormBlockOrganismProps };
