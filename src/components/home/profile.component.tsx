import siteConfig from '../../data/siteConfig'
import {
  Bracket,
  Constant,
  Keyword,
  NumberValue,
  StringValue,
  SubTitle,
} from '@/components'
import { formatDetails } from '@/utils'

export const Profile = () => (
  <div className="card max-w-[900px] rounded bg-base-200 p-4 shadow-xl">
    <div className="grid gap-5 md:mx-auto md:max-w-5xl md:grid-cols-2">
      <div className="px-2">
        <SubTitle>About me</SubTitle>
        <p className="my-8">{siteConfig.authorDescription}</p>
        <p className="my-6">
          You can find my{' '}
          <a
            className="cursor-pointer text-declaration underline"
            href="/eugene-draitsev.pdf"
            target="_blank"
          >
            detailed CV in pdf here
          </a>
        </p>
      </div>
      <div className="flex flex-col">
        <SubTitle className="mb-8">Details</SubTitle>
        <div className="flex flex-1 flex-col justify-center pb-20">
          <Bracket open />
          <div className="ml-4">
            {Object.entries(formatDetails(siteConfig.details)).map(
              ([key, value]) => (
                <div key={key}>
                  <Constant>{key}</Constant>:
                  {typeof value === 'number' && (
                    <NumberValue> {value}</NumberValue>
                  )}
                  {typeof value === 'string' && (
                    <StringValue> &apos;{value}&apos;</StringValue>
                  )}
                  <Keyword>,</Keyword>
                </div>
              ),
            )}
          </div>
          <Bracket />
        </div>
      </div>
    </div>
  </div>
)
