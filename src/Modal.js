import './Modal.scss';

const Modal = ({
  children, title, visible, close,
}) => {
  const clazz = `modal-overlay ${visible ? 'block' : 'hidden'}`;

  return (
    <div className={clazz}>
      <div className="modal fixed top-1/2 left-1/2 bg-green-500">
        <div className="flex justify-between">
          <h2 className="text-xl bold underline">{title}</h2>
          { close ? <button>X</button> : null}
        </div>

        {children}

      </div>
    </div>
  );
};

export default Modal;
