import { useState } from 'react';
import { curriculumItems } from '../../data/curriculum';
import CurriculumModal from './CurriculumModal';
import './Curriculum.css';

export default function Curriculum() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="curriculum section">
      <div className="container">
        <h2 className="section-title section-title--decorated">
          <span className="leaf-decor" aria-hidden="true">🌿</span>
          Our Montessori Curriculum
          <span className="leaf-decor" aria-hidden="true">🌿</span>
        </h2>

        <div className="curriculum__grid">
          {curriculumItems.map((item) => (
            <article key={item.id} className="curriculum__card">
              <img src={item.icon} alt="" className="curriculum__icon" aria-hidden="true" />
              <h3 style={{ color: item.color }}>{item.title}</h3>
              <p>{item.description}</p>
              <button
                type="button"
                className="curriculum__link"
                style={{ color: item.color }}
                onClick={() => setSelectedItem(item)}
              >
                Learn more →
              </button>
            </article>
          ))}
        </div>
      </div>

      <CurriculumModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
