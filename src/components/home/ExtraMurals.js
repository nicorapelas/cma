import { useState } from 'react';
import { extraMuralsItems } from '../../data/extraMurals';
import CurriculumModal from './CurriculumModal';
import './ExtraMurals.css';

export default function ExtraMurals() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="extra-murals section">
      <div className="container">
        <h2 className="section-title section-title--decorated">
          <span className="leaf-decor" aria-hidden="true">🌿</span>
          Extra Murals – Building Skills, Confidence &amp; Fun!
          <span className="leaf-decor" aria-hidden="true">🌿</span>
        </h2>

        <div className="extra-murals__grid">
          {extraMuralsItems.map((item) => (
            <article key={item.id} className="extra-murals__card">
              <div
                className="extra-murals__icon-wrap"
                style={{ borderColor: item.color }}
              >
                <img src={item.icon} alt="" className="extra-murals__icon" aria-hidden="true" />
              </div>
              <h3>{item.title}</h3>
              <button
                type="button"
                className="extra-murals__link"
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
