import { Title } from '@/components/atoms';
import { Section } from '@/components/organisms';
import { LegalPage } from '@/types';
import { renderComp, serialize } from '@/utils';

type LegalTemplateProps = Pick<LegalPage, 'blocks'>;

const LegalTemplate = ({ blocks }: LegalTemplateProps) => {
  return (
    <Section theme={blocks.theme}>
      <div className='flex w-9/10 max-w-screen-lg flex-col items-end'>
        <header className='mt-2xl w-full'>
          <Title
            className={`w-fit break-words pl-[min(10vw,theme(spacing.20))] data-[align=left]:*:-ml-[min(10vw,theme(spacing.20))]`}
            order={1}
          >
            {serialize(blocks.header.title)}
          </Title>

          <section className='mt-xs'>
            {serialize(blocks.header.effectiveDate, {
              paragraph: {
                className: 'text-dimmed *:text-text'
              }
            })}
          </section>
        </header>

        <div className='w-full max-w-screen-sm'>
          {serialize(blocks.data, {
            heading: {
              className: 'mt-xl mb-sm data-[order="2"]:!text-2xl'
            },
            paragraph: {
              className: 'mt-2'
            },
            small: {
              className: 'mt-xl'
            },
            li: {
              className: '[p+&]:mt-4'
            }
          })}
        </div>

        {renderComp(
          <footer className='mt-xl w-full max-w-screen-sm'>
            {serialize(blocks.footer)}
          </footer>,
          [!!blocks.footer]
        )}
      </div>
    </Section>
  );
};
export default LegalTemplate;
export type { LegalTemplateProps };
