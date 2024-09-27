import type { ReactNode, FC } from 'react'

type TextProps = {
  children: ReactNode
  className?: string
}

export const Title: FC<TextProps> = ({ children, className = '' }) => (
  <h1 className={`my-6 text-4xl font-normal text-identifier ${className}`}>
    {children}
  </h1>
)

export const SubTitle: FC<TextProps> = ({ children, className = '' }) => (
  <h2 className={`mb-5 text-3xl font-normal text-declaration ${className}`}>
    {children}
  </h2>
)

export const Constant: FC<TextProps> = ({ children, className = '' }) => (
  <span className={`text-constant ${className}`}>{children}</span>
)

export const StringValue: FC<TextProps> = ({ children, className = '' }) => (
  <span className={`text-string ${className}`}>{children}</span>
)

export const NumberValue: FC<TextProps> = ({ children, className = '' }) => (
  <span className={`text-number ${className}`}>{children}</span>
)

export const Keyword: FC<TextProps> = ({ children, className = '' }) => (
  <span className={`text-keyword ${className}`}>{children}</span>
)

export const Declaration: FC<TextProps> = ({ children, className = '' }) => (
  <span className={`text-declaration ${className}`}>{children}</span>
)
