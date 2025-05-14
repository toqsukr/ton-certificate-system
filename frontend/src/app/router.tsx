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
                path: Routes.CERTIFICATE_INFO,
                lazy: CertificateInfoPageLazy,
              },
              {
                path: Routes.ORGANIZATION_INFO,
                lazy: OrganizationInfoPageLazy,
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
                lazy: UserInfoPageLazy,
              },
              {
                path: Routes.CERTIFICATE_INFO,
                lazy: CertificateInfoPageLazy,
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
