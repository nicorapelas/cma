import { useEffect } from 'react';
import './CurriculumModal.css';

export default function CurriculumModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="curriculum-modal" role="presentation" onClick={onClose}>
      <div
        className="curriculum-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="curriculum-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="curriculum-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <h3
          id="curriculum-modal-title"
          className="curriculum-modal__title"
          style={{ color: item.color }}
        >
          {item.title}
        </h3>

        <div className="curriculum-modal__image-wrap">
          <img
            src={item.detailImage}
            alt={`${item.title} at Carletonville Montessori Academy`}
            className="curriculum-modal__image"
          />
        </div>

        {item.description && (
          <p className="curriculum-modal__description">{item.description}</p>
        )}
      </div>
    </div>
  );
}
