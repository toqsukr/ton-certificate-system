import AuthPage from '@pages/auth'
import ProfilePage from '@pages/profile'
import SearchPage from '@pages/search'
import { Routes } from '@shared/model/routes'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import ConfigLayout from './ui/config-layout'
import ContentLayout from './ui/content-layout'
import MainLayout from './ui/main-layout/main-layout'

const UserInfoPageLazy = async () => {
  const { UserInfoPage } = await import('@pages/user-info')
  return { Component: UserInfoPage }
}

const CertificateInfoPageLazy = async () => {
  const { CertificateInfoPage } = await import('@pages/certificate-info')
  return { Component: CertificateInfoPage }
}

const OrganizationInfoPageLazy = async () => {
  const { OrganizationInfoPage } = await import('@pages/organization-info')
  return { Component: OrganizationInfoPage }
}

const MyOrganizationPageLazy = async () => {
  const { MyOrganizationPage } = await import('@pages/my-organization')
  return { Component: MyOrganizationPage }
}

const MintCertificatePageLazy = async () => {
  const { MintCertificatePage } = await import('@pages/mint-certificate')
  return { Component: MintCertificatePage }
}

const CreateOrganizationPageLazy = async () => {
  const { CreateOrganizationPage } = await import('@pages/create-organization')
  return { Component: CreateOrganizationPage }
}

const AllCertificatesPageLazy = async () => {
  const { AllCertificatesPage } = await import('@pages/all-certificates')
  return { Component: AllCertificatesPage }
}

const OrgCertificatesPageLazy = async () => {
  const { OrgCertificates } = await import('@pages/org-certificates')
  return { Component: OrgCertificates }
}

const AllManagersPageLazy = async () => {
  const { AllManagers } = await import('@pages/all-managers')
  return { Component: AllManagers }
}

const AddManagerPageLazy = async () => {
  const { AddManager } = await import('@pages/add-manager')
  return { Component: AddManager }
}

export const router = createBrowserRouter([
  {
    element: (
      <ConfigLayout>
        <ContentLayout>
          <Outlet />
        </ContentLayout>
      </ConfigLayout>
    ),
    children: [
      {
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          {
            path: Routes.HOME,
            element: <Navigate to={Routes.SEARCH} replace />,
          },
          {
            path: Routes.AUTH,
            element: <AuthPage />,
          },
          {
            path: Routes.PROFILE,
            element: <Outlet />,
            children: [
              {
                element: <ProfilePage />,
                index: true,
              },
              {
                path: Routes.MINT_CERTIFICATE,
                lazy: MintCertificatePageLazy,
              },
              {
                path: Routes.ORGANIZATION_INFO,
                lazy: OrganizationInfoPageLazy,
              },
              {
                path: Routes.CREATE_ORGANIZATION,
                lazy: CreateOrganizationPageLazy,
              },
              {
                path: Routes.ALL_CERTIFICATES,
                element: <Outlet />,
                children: [
                  {
                    index: true,
                    lazy: AllCertificatesPageLazy,
                  },
                  {
                    path: Routes.CERTIFICATE_INFO,
                    lazy: CertificateInfoPageLazy,
                  },
                ],
              },
              {
                path: Routes.USER_INFO,
                element: <Outlet />,
                children: [
                  {
                    index: true,
                    lazy: UserInfoPageLazy,
                  },
                  {
                    path: Routes.ALL_CERTIFICATES,
                    element: <Outlet />,
                    children: [
                      {
                        index: true,
                        lazy: AllCertificatesPageLazy,
                      },
                      {
                        path: Routes.CERTIFICATE_INFO,
                        lazy: CertificateInfoPageLazy,
                      },
                    ],
                  },
                ],
              },

              {
                path: Routes.MY_ORGANIZATION,
                element: <Outlet />,
                children: [
                  {
                    index: true,
                    lazy: MyOrganizationPageLazy,
                  },
                  {
                    path: Routes.ALL_MANAGERS,
                    lazy: AllManagersPageLazy,
                  },
                  {
                    path: Routes.ADD_MANAGER,
                    lazy: AddManagerPageLazy,
                  },

                  {
                    path: Routes.ORGANIZATION_CERTIFICATES,
                    element: <Outlet />,
                    children: [
                      {
                        index: true,
                        lazy: OrgCertificatesPageLazy,
                      },
                      {
                        path: Routes.CERTIFICATE_INFO,
                        lazy: CertificateInfoPageLazy,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            path: Routes.SEARCH,
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <SearchPage />,
              },
              {
                path: Routes.USER_INFO,
                element: <Outlet />,
                children: [
                  {
                    index: true,
                    lazy: UserInfoPageLazy,
                  },
                  {
                    path: Routes.ALL_CERTIFICATES,
                    element: <Outlet />,
                    children: [
                      {
                        index: true,
                        lazy: AllCertificatesPageLazy,
                      },
                      {
                        path: Routes.CERTIFICATE_INFO,
                        lazy: CertificateInfoPageLazy,
                      },
                    ],
                  },
                ],
              },
              {
                path: Routes.ORGANIZATION_INFO,
                lazy: OrganizationInfoPageLazy,
              },
            ],
          },
        ],
      },
    ],
  },
])
