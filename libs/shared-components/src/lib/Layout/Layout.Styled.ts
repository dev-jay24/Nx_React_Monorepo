import { theme } from '@msr-monorepo/shared-style';
import { Layout } from 'antd';

import { styled } from 'styled-components';

export const StyledLayout = styled(Layout)`
  --headerHeight: 48px;
  --footerHeight: 60px;
  --bodyHeight: calc(100vh - var(--headerHeight) - var(--footerHeight) - 3px);

  &.ant-layout {
    overflow: hidden;
    min-height: 100vh;
    /* Sidebar */
    .ant-layout-sider {
      min-height: 100vh;
      .logoWrapper {
        height: var(--headerHeight);
        display: flex;
        align-items: center;
        // justify-content: center;
        // width: 70px;
        padding: 0 10px;
        text-wrap: nowrap;
        /* margin-bottom: 2px; */
        img {
          width: auto;
          height: 100%;
          object-fit: contain;
          &.logoSm {
            max-width: 30px;
            max-height: 30px;
          }
        }
      }
      .ant-menu {
        &.sidebarMenu {
          border-top: 3px solid ${theme?.color?.background};
          height: var(--bodyHeight);
          overflow: auto;
        }
      }

      .ant-layout-sider-trigger {
        height: var(--footerHeight);
        line-height: var(--footerHeight);
      }
    }
    /* Header */
    .ant-layout-header {
      height: var(--headerHeight);
      margin-bottom: 3px;
      padding: 0 9px;

      .notification-container {
        margin: 8px 12px;
        padding: 8px;
        height: 32px;
        display: flex;
        justify-content: center;
      }

      .profile-user-name {
        text-decoration: none;
        margin-left: 4px;
        color: ${theme?.color?.primary};
      }

      .header-dropdown {
        height: 32px;
        cursor: pointer;
      }

      .header-title {
        /* text-align: left; */
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: ${theme?.color?.black};
      }

      .header-container {
        display: flex;
      }
      .notification-container {
        margin: 8px 12px;
        padding: 5px;
        height: 32px;
        display: flex;
        justify-content: center;
        .notificationBadge {
          cursor: pointer;
          .notificationIcon {
            svg {
              width: 25px;
              height: 25px;
            }
            .ant-badge .ant-badge-dot {
              top: 3px;
              left: 12px;
            }
          }
        }
      }

      .profile-avatar {
        padding: 8px;
        border: 1px solid ${theme?.color?.black};
        background-color: ${theme?.color?.white};
      }

      .profile-avatar-container {
        width: 32px;
        height: 32px;
        border-radius: 50%;

        color: white;
        align-items: center;
        justify-content: center;
        display: flex;
        margin: 0 0 0 12px;
      }
      .profile-place-holder {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        display: flex;
        background-color: ${theme?.color?.secondaryLight};
      }
    }

    /* Content */
    .ant-layout-content {
      height: var(--bodyHeight);
      overflow: auto;
    }
    /* Footer */
    .ant-layout-footer {
      height: var(--footerHeight);
      text-align: center;
    }
  }
  .content-body {
    padding: 15px 0;
  }
  .content-wrap {
    padding: 0 15px;
  }
`;
