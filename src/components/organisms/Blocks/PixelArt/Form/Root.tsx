'use client';

import { useToPng } from '@hugocxl/react-to-image';
import { useSearchParams } from 'next/navigation';
import { RefObject, forwardRef, useEffect } from 'react';
import { z } from 'zod';

import {
  Button,
  ColorInput,
  NumberInput,
  PillsInput
} from '@/components/atoms';
import { TimesIcon } from '@/components/atoms/Icon/icons';
import Pill, { PillGroup } from '@/components/atoms/Pill';
import { Form } from '@/components/molecules';
import { FormRootProps } from '@/components/molecules/Form';
import { useSetSearchParams } from '@/hooks';
import { useColorsContext } from '@/hooks/contexts';
import { cn, isType } from '@/utils';

import { MAX_SIZE, MIN_SIZE, SearchParams, parseSize } from '../Root';

type PixelArtFormBlockOrganismOwnProps = {
  defaults: SearchParams;
  canvasRef: RefObject<HTMLDivElement>;
};

type PixelArtFormBlockOrganismProps = PixelArtFormBlockOrganismOwnProps &
  Omit<Partial<FormRootProps>, keyof PixelArtFormBlockOrganismOwnProps>;

const PixelArtFormBlockOrganism = (
  { defaults, canvasRef, className, ...props }: PixelArtFormBlockOrganismProps,
  ref: PixelArtFormBlockOrganismProps['ref']
) => {
  const searchParams = useSearchParams(),
    setSearchParams = useSetSearchParams(),
    { colors, addColor, removeColor } = useColorsContext();

  const [_, convert, pngRef] = useToPng<HTMLDivElement>({
    onSuccess: (data) => {
      const link = document.createElement('a');

      link.download = 'pixel-art.png';
      link.href = data;

      link.click();
    }
  });

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

  useEffect(() => {
    addColor(color);
  }, [addColor, color]);

  useEffect(() => {
    if (canvasRef.current) pngRef(canvasRef.current);
  }, [canvasRef, pngRef]);

  return (
    <aside className='relative grow border border-l-0 bg-body p-md py-lg sm:max-w-xs'>
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
            placeholder={`${MIN_SIZE} - ${MAX_SIZE}`}
          />
        </Form.Control>

        <Form.Control name='color'>
          <ColorInput
            label='Color:'
            onChangeEnd={(value) => setSearchParams({ color: value })}
            placeholder={defaults.color}
            value={color}
          />
        </Form.Control>

        <PillsInput label='Used colors:'>
          <PillGroup>
            {colors.map((c) => (
              <Pill
                className='relative !h-fit p-0'
                key={c}
              >
                <Button
                  color={c}
                  isIconOnly
                  onClick={() => {
                    setSearchParams({ color: c });
                  }}
                />

                <Button
                  className='absolute right-0 top-0 size-1/2 rounded-full -translate-y-1/4 translate-x-1/4'
                  disabled={c === color}
                  isIconOnly
                  onClick={() => {
                    removeColor(c);
                  }}
                  variant='default'
                >
                  <TimesIcon className='absolute left-1/2 top-1/2 size-2/3 -translate-x-1/2 -translate-y-1/2' />
                </Button>
              </Pill>
            ))}
          </PillGroup>
        </PillsInput>

        <Button
          className='mt-md'
          onClick={convert}
        >
          Dowload Pixel Art
        </Button>
      </Form.Root>
    </aside>
  );
};

export default forwardRef(PixelArtFormBlockOrganism);
export type { PixelArtFormBlockOrganismProps };
