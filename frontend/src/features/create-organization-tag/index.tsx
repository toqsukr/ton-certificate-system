export const useCreateOrgTag = () => {
  const updateTag = () => {
    sessionStorage.setItem('create-org-tag', new Date().toISOString())
  }

  const checkTag = () => {
    const savedTag = sessionStorage.getItem('create-org-tag')

    if (!savedTag) return true

    const savedTime = new Date(savedTag).getTime()
    const currentTime = new Date().getTime()
    const tenMinutesInMs = 10 * 60 * 1000

    return currentTime - savedTime >= tenMinutesInMs
  }

  return { checkTag, updateTag }
}
