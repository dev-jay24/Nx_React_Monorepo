import { Modal } from 'antd';

import { ExclamationCircle } from '../../svg/ExclamationCircle';

interface IProps {
  open: boolean;
  title: string;
  subTitle: string;
  onOk: () => void;
  onCancel: () => void;
}

export const ConfirmModel: React.FC<IProps> = ({
  open,
  onOk,
  onCancel,
  title,
  subTitle,
}) => {
  return (
    <Modal
      title={
        <div className="d-flex align-self-start">
          <ExclamationCircle />{' '}
          <h3 className="d-inline-block ml-8 mt-2">{title}</h3>
        </div>
      }
      centered={true}
      open={open}
      okText={'Yes'}
      cancelText={'No'}
      onOk={onOk}
      onCancel={onCancel}
      closeIcon={false}
    >
      <div className="ml-32">
        <p>{subTitle}</p>
      </div>
    </Modal>
  );
};
