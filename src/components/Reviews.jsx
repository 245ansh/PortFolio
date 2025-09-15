import { motion } from 'framer-motion';

const reviews = [
  
  {
    id: 2,
    title: "Pirates of the Caribbean",
    year: "2003",
    rating: 4.6,
    genre: "Adventure Fantasy",
    director: "Gore Verbinski",
    review:`This is the Rewatch review for this after watching it twice before. Once in 2020 during lockdown period, where just saw it mindlessly, then in 2022, where understood the whole storyline and then yesterday night was just banger.
Just one word CAPTAIN JACK SPARROW...
This movie is just perfection for a action comedy genre.
The storyline, the direction, the bgm, the casts, the twists ,the turns, the comedy, the Captain Jack Sparrow, the VFX, it's all just peakkk...
I don't wanna cut the .5 too, but very sorry, during my last watches I saw the 100 mistakes in pirates of carribbean on YouTube, so it's actually not their mistake, it's mine.
And yeah one special moment, watched it in hindi but just switched to english during the infamous PARLEY... scene of jack, exceptional piece💖😂.
But Nahh..
Must watch, a lifetime watch, watch it with family friends alone, it's never gonna disappoint you.`,
    highlights: [
      "Johnny Depp's iconic performance",
      "Perfect blend of action and comedy",
      "Stunning visual effects",
      "Memorable characters and dialogue"
    ],
    image: "/projects/reviews/Pirates.jpg"
  },
  {
    id: 3,
    title: "28 Days Later",
    year: "2002",
    rating: 4,
    genre: "Horror Thriller",
    director: "Danny Boyle",
    review:`I downloaded it for 1080p worth 3.gb still the picture quality sucked.
So, watched this and 28 week later in a single shot to get ready for their sequel 28 years later releasing a week later.
So yeahh, it was just my 2nd or 3rd Cillian Murphy movie and for him i would say is just wow. He carries an aura, he has something special in his accent and tone.
It fits it all on him, although he was a skinny guy in the movie.
First on, the best thing, it gave a perfect base for the movie or the franchise, in the very beginning, short and straight.
The direction throughout the whole felt a bit messy specially during the infected scenes. Also I didn't find something worth capturing.
Then the casts were perfect.
The storyline wasn't slow as of typical horror movie, rather went at a constant pace.
Also the infected were shown nicely and gore without extra abstraction.
Something worth remembering was the last climax of soldiers with some other intention then saving, gave the story a spice at end and concluded the movie very well.
Yeah, absolutely a great watch.
3.5 for the movie and .5 for Cillian.`,
    highlights: [
      "Revolutionary approach to zombie genre",
      "Intense and realistic atmosphere",
      "Outstanding lead performance",
      "Thought-provoking social commentary"
    ],
    image: "/projects/reviews/28Days.png"
  },
  {
    id: 1,
    title: "Maharaja",
    year: "2024",
    rating: 4.2,
    genre: "Mystery Thriller Action",
    director: "Nithilan Saminathan",
    review:`I was late to watch this movie, after already knowing all its appreciations in the media. Yes its holds all of that in it.
This movie comes in the category of Andhadhun, Ludo, Chup, Ak vs Ak and many, and I am a huge fan of this category.
The best takeaway of the movie was the story. It is so well written and executed. Film proceeds itself in 2 timelines that is before the murder and after it. However the murderer is well predicted before the ending but the climax and ending is so perfect and quite unpredictable.
Every cast member (specially Anurag Kashyap) acted truly well in their characters. There were no casting mistakes.
Then comes our Vijay bhau, he was the most accurate man for this character and he does characterize it that way. His acting is so pure and natural and that's not for this movie, well for all of his movies.
The only flaw I felt was its non-engaging first half. The first half was meant to introduce characters and bring a flow to the storyline but it happened a bit slowly and felt so stretched and detaching.
Another thing I missed was a creepious background score for the screen which could be the more invested on.
Overall it is a must watch suspense drama movie which must not be missed at any cost.`,
    highlights: [
      "Perfect story and execution",
      "Strong character development",
      "Authentic atmosphere",
      "Good acting"
    ],
    image: "/projects/reviews/Maharaja.jpg"
  },
];

const ReviewCard = ({ review, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative bg-[#2a2a2a] rounded-2xl border border-[#333] hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
        {/* Movie Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            src={review.image}
            alt={`${review.title} movie poster`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a] via-[#2a2a2a]/50 to-transparent"></div>
          
          {/* Rating Badge */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute top-4 right-4 bg-purple-500/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1"
          >
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-white font-bold text-sm">{review.rating}</span>
          </motion.div>
          
          {/* Movie Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <motion.h3
              whileHover={{ scale: 1.02 }}
              className="text-2xl font-bold text-white mb-1"
            >
              {review.title}
            </motion.h3>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <span>{review.year}</span>
              <span>•</span>
              <span>{review.genre}</span>
              <span>•</span>
              <span>{review.director}</span>
            </div>
          </div>
        </div>
        
        {/* Review Content */}
        <div className="p-6">
          <p className="text-gray-300 mb-4 leading-relaxed">{review.review}</p>
          
        </div>
      </div>
    </motion.div>
  );
};

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="text-white py-16 px-4 md:px-20 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Movie Reviews
            </span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My thoughts and insights on some of the most captivating films I've watched
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
        
        {/* Reviews Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6"
          >
            <a
              href="https://letterboxd.com/245ansh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              View more reviews on Letterboxd
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
