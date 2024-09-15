import { Slot } from '@radix-ui/react-slot';
import {
  ComponentPropsWithRef,
  Suspense,
  SuspenseProps,
  forwardRef
} from 'react';

type SlotAtomAsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | ({ asChild: true; children: React.ReactNode } & ComponentPropsWithRef<
      typeof Slot
    >);

type SlotAtomOwnProps = {
  hasAsyncChildren?: boolean;
  suspenseProps?: Partial<SuspenseProps>;
};

type SlotAtomProps = SlotAtomOwnProps &
  Omit<ComponentPropsWithRef<typeof Slot>, keyof SlotAtomOwnProps>;

const SlotAtom = (
  { hasAsyncChildren, children, suspenseProps, ...props }: SlotAtomProps,
  ref: SlotAtomProps['ref']
) => {
  if (hasAsyncChildren) {
    return (
      <Slot
        ref={ref}
        {...props}
      >
        <Suspense {...suspenseProps}>{children}</Suspense>
      </Slot>
    );
  }

  return (
    <Slot
      ref={ref}
      {...props}
    >
      {children}
    </Slot>
  );
};

export default forwardRef(SlotAtom);
export type { SlotAtomProps, SlotAtomAsChildProps };
