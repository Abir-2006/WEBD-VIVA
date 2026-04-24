import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

const vegCategories = [
  {
    img: 'https://masalaandchai.com/wp-content/uploads/2025/02/Paneer-Butter-Masala.jpg',
    title: 'North Indian',
    desc: 'Aromatic curries, butter-rich gravies and royal flavors.',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_X_Y9KjeDdINj5Lbb-1kAFtab484d8tDlg&s',
    title: 'South Indian',
    desc: 'Dosa, idli, sambhar and coconut-infused delicacies.',
  },
  {
    img: 'https://i0.wp.com/paattiskitchen.com/wp-content/uploads/2023/01/kmc_20230110_142103-1.jpg?resize=1024%2C576&ssl=1',
    title: 'Bengali Cuisine',
    desc: 'Shorshe Ilish, sweets and authentic vegetarian dishes.',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJpFee-HSJrWJoxc_uwrQRAZhkM4ThyN9xw&s',
    title: 'Rajasthani Foods',
    desc: 'Dal Baati Churma, Gatte ki Sabzi and bold flavors.',
  },
];

const nonVegCategories = [
  {
    img: 'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg',
    title: 'Biryani & Rice',
    desc: 'Fragrant biryanis, kebab pulao and rich rice dishes.',
  },
  {
    img: 'https://www.whiskaffair.com/wp-content/uploads/2020/10/Butter-Chicken-2-1.jpg',
    title: 'Chicken Curries',
    desc: 'Butter chicken, kadhai chicken, and spicy masalas.',
  },
  {
    img: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Ruxana-Gafoor/Goan_Fish_Curry_Recipe_With_Kokum_by_Archanaskitchen.jpg',
    title: 'Seafood Specials',
    desc: 'Goan fish curry, prawn masala and coastal delicacies.',
  },
  {
    img: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Best-Mutton-Curry-Recipe.jpg',
    title: 'Mutton & Lamb',
    desc: 'Slow-cooked Rogan Josh, Keema and Nihari.',
  },
];

const vegWhyUs = [
  { icon: 'fa-seedling',   title: '500+ Veg Recipes',  desc: 'Explore the vast world of Indian vegetarian cooking.' },
  { icon: 'fa-list-check', title: 'Step-by-Step',       desc: 'Beginner-friendly instructions for perfect cooking.' },
  { icon: 'fa-leaf',       title: 'Healthy Options',    desc: 'Low-oil, high-nutrition and sattvic recipes.' },
  { icon: 'fa-users',      title: 'Community Loved',    desc: 'Recipes cooked, reviewed and loved by real users.' },
];

const nonVegWhyUs = [
  { icon: 'fa-drumstick-bite', title: '500+ Non-Veg',    desc: 'Richly marinated meats, bold spices and more.' },
  { icon: 'fa-list-check',     title: 'Step-by-Step',    desc: 'Master complex non-veg dishes with ease.' },
  { icon: 'fa-fire-flame-curved', title: 'Bold Flavors', desc: 'Robust, protein-rich meals for every occasion.' },
  { icon: 'fa-users',          title: 'Community Loved', desc: 'Recipes cooked, reviewed and loved by real users.' },
];

const vegTestimonials = [
  { quote: '"The Palak Paneer recipe was absolutely divine!"', author: '– Amishka' },
  { quote: '"Very easy instructions for beginners. Amazing website!"', author: '– Rahul' },
  { quote: '"Great variety and well-organized categories. Loved it!"', author: '– Jaskaran' },
];

const nonVegTestimonials = [
  { quote: '"Love the Chicken Biryani recipe! It turned out so good."', author: '– Abir' },
  { quote: '"The Mutton Rogan Josh was restaurant-quality at home!"', author: '– Ayan' },
  { quote: '"Best seafood recipes I\'ve found online. Highly recommend!"', author: '– Vishesh' },
];

const vegSlides = [
  {
    img: 'https://thumbs.dreamstime.com/b/generated-image-upscaled-gigapixel-v-model-standard-denoise-sharpen-decompression-406873667.jpg',
    title: 'Welcome to Delicious Recipes',
    sub: 'Discover thousands of vegetarian recipes from across India',
  },
  {
    img: 'https://www.abbott.in/content/dam/corp/abbott/en-in/articles/india/_604811.jpg',
    title: 'Healthy & Nutritious',
    sub: 'Find plant-based recipes that match your dietary preferences',
  },
  {
    img: 'https://theindia.restaurant/wp-content/uploads/2025/02/indian-food.jpg',
    title: 'Easy to Follow',
    sub: 'Step-by-step instructions for perfect vegetarian results',
  },
];

const nonVegSlides = [
  {
    img: 'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg',
    title: 'Non-Veg Recipes That Wow',
    sub: 'Marinated, grilled, slow-cooked — discover bold Indian flavors',
  },
  {
    img: 'https://www.whiskaffair.com/wp-content/uploads/2020/10/Butter-Chicken-2-1.jpg',
    title: 'Chicken Favourites',
    sub: 'From butter chicken to biryani — master every dish',
  },
  {
    img: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Best-Mutton-Curry-Recipe.jpg',
    title: 'Rich & Hearty',
    sub: 'Slow-cooked meats with authentic Indian spices',
  },
];

export default function Home() {
  const { mode } = useTheme();
  const isVeg = mode === 'veg';

  const categories  = isVeg ? vegCategories   : nonVegCategories;
  const whyUs       = isVeg ? vegWhyUs        : nonVegWhyUs;
  const testimonials= isVeg ? vegTestimonials : nonVegTestimonials;
  const slides      = isVeg ? vegSlides       : nonVegSlides;

  const carouselId = 'recipeCarousel';

  return (
    <>
      <Navbar />

      {/* Hero Carousel */}
      <section id="home" className="carousel-section">
        <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide-to={i}
                className={i === 0 ? 'active' : ''}
              />
            ))}
          </div>
          <div className="carousel-inner">
            {slides.map((s, i) => (
              <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                <img src={s.img} alt={s.title} />
                <div className="carousel-caption">
                  <h1>{s.title}</h1>
                  <p>{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* Mode Banner */}
      <div className="mode-banner">
        {isVeg
          ? '🥬 Showing Vegetarian Content — pure, plant-based goodness from across India'
          : '🍗 Showing Non-Vegetarian Content — bold flavors, rich meats, coastal delights'}
      </div>

      {/* Trending Categories */}
      <section id="categories" className="container mt-5">
        <h2 className="section-title">{isVeg ? 'Trending Veg Categories' : 'Trending Non-Veg Categories'}</h2>
        <div className="row g-4">
          {categories.map((c, i) => (
            <div className="col-md-3" key={i}>
              <div className="recipe-card text-center">
                <img src={c.img} alt={c.title} />
                <div className="recipe-card-body">
                  <h4 className="recipe-title">{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="container mt-5">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="row g-4 text-center">
          {whyUs.map((w, i) => (
            <div className="col-md-3" key={i}>
              <div className="recipe-card p-4">
                <i className={`fas ${w.icon} fa-2x mb-3 theme-icon`}></i>
                <h4 className="recipe-title">{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container mt-5">
        <h2 className="section-title">What Our Users Say</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((t, i) => (
              <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''} text-center`}>
                <div className="recipe-card p-4">
                  <p className="mb-3">{t.quote}</p>
                  <h5 className="recipe-title">{t.author}</h5>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
