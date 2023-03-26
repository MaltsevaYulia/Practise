import css from './Modal.module.css';

export const Modal = ({ currenAvatar: { alt, src }, closeModal }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button className={css.modal_btn} onClick={closeModal}>
          Close
        </button>
        <img
          src={src}
          alt={alt}
          width="150"
          height="150"
          className={css.modal_img}
        />
      </div>
    </div>
  );
};