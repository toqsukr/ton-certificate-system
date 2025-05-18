import { z } from 'zod'
import { create } from 'zustand'

const AttributeSchema = z.object({
  trait_type: z.string(),
  value: z.string(),
})

export const OrgContentFormSchema = z.object({
  name: z.string().min(1).max(30),
  description: z.string().min(1).max(500),
  image: z.string().url().nullish(),
  attributes: AttributeSchema.array().nullish(),
})

type TAttribute = z.infer<typeof AttributeSchema>

type OrgContentStates = {
  name: string | null
  description: string | null
  image: string | null
  attributes?: TAttribute[]
}

type OrgContentActions = {
  updateName: (name: string | null) => void
  updateDescription: (description: string | null) => void
  updateImage: (image: string | null) => void
  updateAttributes: (attributes: TAttribute[]) => void
  resetStore: () => void
}

type OrgContentStore = OrgContentStates & OrgContentActions

const defaultState = {
  name: null,
  description: null,
  image: null,
  attributes: undefined,
}

export const useOrgContent = create<OrgContentStore>((set, get) => ({
  ...defaultState,
  updateName: name => set({ ...get(), name }),
  updateDescription: description => set({ ...get(), description }),
  updateImage: image => set({ ...get(), image }),
  updateAttributes: attributes => set({ ...get(), attributes }),
  resetStore: () => set({ ...get(), ...defaultState }),
}))
