import { whyChooseItems } from '../../data/whyChoose';
import WhyChooseIcon from './WhyChooseIcon';
import './WhyChoose.css';

export default function WhyChoose() {
  return (
    <section className="why-choose section">
      <div className="container">
        <h2 className="section-title section-title--decorated">
          <span className="leaf-decor" aria-hidden="true">🌿</span>
          Why Families Choose CMA
          <span className="leaf-decor" aria-hidden="true">🌿</span>
        </h2>

        <div className="why-choose__grid">
          {whyChooseItems.map((item) => (
            <article key={item.title} className="why-choose__card">
              <div
                className="why-choose__icon"
                style={{ backgroundColor: item.color }}
              >
                <WhyChooseIcon type={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
