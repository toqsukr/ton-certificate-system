import { z } from 'zod'
import { create } from 'zustand'

const AttributeSchema = z.object({
  trait_type: z.string(),
  value: z.string(),
})

export const CertContentFormSchema = z.object({
  organization: z.string().min(1),
  name: z.string().min(1).max(30),
  description: z.string().min(1).max(500),
  image: z.string().url().nullish(),
  attributes: AttributeSchema.array().nullish(),
})

type TAttribute = z.infer<typeof AttributeSchema>

type CertContentStates = {
  organization: string | null
  name: string | null
  description: string | null
  image: string | null
  attributes?: TAttribute[]
}

type CertContentActions = {
  updateOrganization: (organization: string | null) => void
  updateName: (name: string | null) => void
  updateDescription: (description: string | null) => void
  updateImage: (image: string | null) => void
  updateAttributes: (attributes: TAttribute[]) => void
  resetStore: () => void
}

type CertContentStore = CertContentStates & CertContentActions

const defaultState = {
  organization: null,
  name: null,
  description: null,
  image: null,
  attributes: undefined,
}

export const useCertContent = create<CertContentStore>((set, get) => ({
  ...defaultState,
  updateName: name => set({ ...get(), name }),
  updateImage: image => set({ ...get(), image }),
  updateAttributes: attributes => set({ ...get(), attributes }),
  updateDescription: description => set({ ...get(), description }),
  updateOrganization: organization => set({ ...get(), organization }),
  resetStore: () => set({ ...get(), ...defaultState }),
}))
