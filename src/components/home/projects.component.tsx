'use client'

import { useAsync } from 'react-use'

import siteConfig from '../../data/siteConfig'
import { SubTitle } from '@/components'

const githubProfileUrl = `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=owner&sort=updated&per_page=5&page=1`

export const Projects = () => {
  const state = useAsync(async () => {
    const response = await fetch(githubProfileUrl)
    return response.json()
  }, [])

  const { loading, error, value: repositories } = state

  return (
    <div className="card w-full max-w-[900px] rounded bg-base-200 p-4 shadow-xl">
      <div>
        <SubTitle>Latest repositories on Github</SubTitle>
        {loading && (
          <div className="flex h-[380px] w-full items-center justify-center">
            <span className="loading loading-ring h-[75px] w-[75px]"></span>
          </div>
        )}
        {!loading && error && <p>{error.message}</p>}
        {!loading &&
          repositories?.map?.((repository: any) => (
            <div
              className="mb-3 flex items-center justify-between border-b  border-gray-500 pb-3"
              key={repository.html_url}
            >
              <div className="flex-1">
                <a
                  href={repository.html_url}
                  className="cursor-pointer font-bold text-constant underline"
                >
                  {repository.name}
                </a>
                <p className="py-1.5">{repository.description}</p>
                <p className="text-xs">
                  Updated: {new Date(repository.updated_at).toUTCString()}
                </p>
              </div>
              <div className="ml-1.5 flex min-w-[30px] items-center space-x-2 text-white">
                <p className="mb-0.75 text-lg">★</p>
                <div>{repository.stargazers_count}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
