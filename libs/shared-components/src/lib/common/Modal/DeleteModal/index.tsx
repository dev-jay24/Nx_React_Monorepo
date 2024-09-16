import { CloseCircleOutlined } from '@ant-design/icons';

// import { toAbsoluteUrl } from 'utils/functions';

import { ModalWrapper } from '../Modal.Styled';
import { IModalProps } from '../types';
import { Button } from '../../Button';

export const DeleteModal = ({
  open,
  onOk,
  onCancel,
  closeIcon,
  width,
  modalTitle,
  modalDesc,
}: IModalProps) => {
  return (
    <ModalWrapper
      width={width ?? 500}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      centered={true}
      className="common-modal delete-modal text-center"
      closeIcon={closeIcon ?? <CloseCircleOutlined />}
      footer={[
        <div key={3} className="d-flex">
          <Button
            onClick={onCancel}
            type="default"
            htmlType="button"
            className="w-100"
            size="middle"
          >
            Cancel
          </Button>
          <Button
            onClick={onOk}
            type="primary"
            htmlType="button"
            className="w-100"
            size="middle"
          >
            Remove
          </Button>
        </div>,
      ]}
    >
      <div className="content-wrapper">
        <picture className="picture-wrapper">
          {/* <img src={toAbsoluteUrl('/asset/RemoveTagBg.png')} alt="Background" /> */}
        </picture>
        <div className="modal-header">
          <h2 className="modal-title">{modalTitle}</h2>
        </div>
        <p className="modal-subtitle text-center">{modalDesc}</p>
      </div>
    </ModalWrapper>
  );
};
