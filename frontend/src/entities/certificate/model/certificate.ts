export type TCertificate = {
  id: string
  data: TData
}

type TData = { ownerID: string; organizationID: string } & { [key: string]: string }
