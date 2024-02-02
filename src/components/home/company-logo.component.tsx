import Image from 'next/image'

interface CompanyLogoProps {
  name: string
  className?: string
}

export const CompanyLogo = ({ name, className }: CompanyLogoProps) => {
  return (
    <div className={`${className}`}>
      <Image
        className="-ml-4 mb-2 max-w-[60px] rounded-full object-contain md:m-0"
        width={120}
        height={120}
        alt="logo"
        src={`/companies/${name}.png`}
      />
    </div>
  )
}
