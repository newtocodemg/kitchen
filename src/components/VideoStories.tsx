import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, X, Sparkles, Clock, Star, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface VideoStory {
  id: string;
  title: string;
  client: string;
  city: string;
  duration: string;
  videoUrl: string;
  thumbnailUrl: string;
  fallbackSrc?: string;
  highlights: string[];
  quote: string;
  rating: number;
}

const VIDEO_STORIES: VideoStory[] = [
  {
    id: 'story-1',
    title: 'The Modernist Oasis',
    client: 'Neha & Rahul',
    city: 'Bangalore',
    duration: '1:12',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-kitchen-with-modern-appliances-and-cabinetry-41584-large.mp4',
    thumbnailUrl: '/images/hero.webp',
    fallbackSrc: '/images/hero.jpg',
    highlights: ['Calacatta marble island', 'Handleless matte cabinets', 'Smart ambient profiles'],
    quote: 'The transformation from our dark 90s kitchen to this sleek, fluid sunlit space has fundamentally changed how our family interacts daily.',
    rating: 5
  },
  {
    id: 'story-2',
    title: 'Sleek Japandi Harmony',
    client: 'Dr. Amit Sen',
    city: 'Mumbai',
    duration: '1:05',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-pouring-hot-water-into-a-cup-of-coffee-41582-large.mp4',
    thumbnailUrl: '/images/kitchen-open.webp',
    fallbackSrc: '/images/japandi.jpg',
    highlights: ['Natural timber veneers', 'Blum motion lifters', 'Concealed storage drawer'],
    quote: 'We wanted organic minimalism. Every cabinet moves silently, and the custom wood grains align across panels perfectly.',
    rating: 5
  },
  {
    id: 'story-3',
    title: 'The Parisian Bistro',
    client: 'Priya & Kabir',
    city: 'Delhi NCR',
    duration: '1:18',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-person-cutting-vegetables-in-a-kitchen-41581-large.mp4',
    thumbnailUrl: '/images/kitchen-island.webp',
    fallbackSrc: '/images/obsidian.jpg',
    highlights: ['Tinted brass custom knobs', 'Built-in herb irrigation', 'Fluted glass shutters'],
    quote: 'Bespoke design at its absolute finest. Guests are drawn directly to the counter the moment they enter our home now.',
    rating: 5
  }
];

export default function VideoStories() {
  const [activeStory, setActiveStory] = useState<VideoStory | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle play/pause toggles
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle mute toggles
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Keypress support inside lightbox
  useEffect(() => {
    if (!activeStory) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveStory(null);
      } else if (e.key === ' ') {
        e.preventDefault();
        if (videoRef.current) {
          if (isPlaying) {
            videoRef.current.pause();
          } else {
            videoRef.current.play().catch(() => {});
          }
          setIsPlaying(!isPlaying);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeStory, isPlaying]);

  return (
    <section id="video-stories" className="relative bg-[#1E4D3D] text-white py-28 sm:py-36 overflow-hidden z-10 border-t border-white/10">
      
      {/* PREMIUM RADIAL GRADIENT GLOWS & FLOATING MOTIFS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(184,138,90,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="absolute top-12 left-12 w-2 h-2 rounded-full bg-accent/30 animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-16 w-3 h-3 rounded-full bg-accent/20 animate-ping pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="flex justify-center">
            <span className="text-[11px] font-bold text-accent uppercase tracking-[0.2em] bg-white/10 px-4 py-2 rounded-[14px]">
              VIDEO STORIES
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Cinematic Client Transformations
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto max-w-[65ch]">
            Experience the exquisite transition journey of ordinary kitchen floorplans blooming into premium bespoke culinary masterpieces.
          </p>
        </div>

        {/* REEL GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {VIDEO_STORIES.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => {
                setActiveStory(story);
                setIsPlaying(true);
                setIsMuted(false);
              }}
              className="group relative bg-[#12362a] border border-white/10 rounded-[24px] overflow-hidden shadow-xl hover:shadow-2xl hover:border-accent/30 transition-all duration-300 cursor-pointer"
            >
              {/* Aspect Ratio container with overlay */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={story.thumbnailUrl}
                  alt={story.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 block"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (story.fallbackSrc && target.src.indexOf(story.thumbnailUrl) !== -1) {
                      target.src = story.fallbackSrc;
                    } else {
                      target.src = '/images/hero.jpg';
                    }
                  }}
                />
                
                {/* Elegant dark green linear/radial mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12362a] via-[#12362a]/20 to-transparent opacity-90" />

                {/* Floating play bubble button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-primary-dark flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-2xl">
                    <Play className="w-6 h-6 fill-primary-dark stroke-primary-dark translate-x-0.5" />
                  </div>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-[10px] text-[10px] font-bold tracking-wider flex items-center gap-1">
                  <Clock className="w-3 h-3 text-accent" />
                  <span>{story.duration}</span>
                </div>
              </div>

              {/* CARD DETAILS */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{story.client} • {story.city}</span>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-accent transition-colors flex items-center gap-1.5">
                      <span>{story.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                  </div>

                  <div className="flex items-center gap-0.5 text-accent shrink-0">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-accent stroke-accent" />
                    ))}
                  </div>
                </div>

                {/* Client brief quote preview */}
                <p className="text-stone-300 text-xs leading-relaxed italic max-w-[65ch]">
                  "{story.quote.slice(0, 100)}..."
                </p>

                {/* Highlights list */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {story.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-semibold bg-white/5 border border-white/10 px-2.5 py-1 rounded-[8px] text-stone-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* FULLSCREEN IMMERSIVE LIGHTBOX VIDEO PLAYER */}
      <AnimatePresence>
        {activeStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-950/98 backdrop-blur-xl z-50 flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
          >
            {/* Top Close Bar */}
            <button
              onClick={() => setActiveStory(null)}
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent z-55"
              aria-label="Close Story Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content Split Grid */}
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
              
              {/* VIDEO COLUMN */}
              <div className="lg:col-span-7 relative bg-black rounded-[24px] overflow-hidden shadow-2xl border border-white/10 aspect-video">
                <video
                  ref={videoRef}
                  src={activeStory.videoUrl}
                  autoPlay={isPlaying}
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Custom Overlay Controls */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-6 flex items-center justify-between gap-4">
                  
                  {/* Play & Mute Button Cluster */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-3 bg-accent text-primary-dark rounded-full hover:scale-105 transition-all cursor-pointer"
                      aria-label={isPlaying ? "Pause transformation video" : "Play transformation video"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-primary-dark" /> : <Play className="w-4 h-4 fill-primary-dark" />}
                    </button>
                    
                    <button
                      onClick={toggleMute}
                      className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all cursor-pointer"
                      aria-label={isMuted ? "Unmute transformation audio" : "Mute transformation audio"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Streaming indicator */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-white/70">
                    <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    <span>Cinematic Tour • Playback Active</span>
                  </div>

                </div>
              </div>

              {/* TRANSFORMATION STORY DESCRIPTION COLUMN */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] tracking-widest uppercase text-accent font-bold">CLIENT STORY & REALITY</span>
                  </div>
                  
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {activeStory.title}
                  </h3>
                  
                  <p className="text-xs text-stone-400">
                    Owner: <span className="text-white font-semibold">{activeStory.client}</span> • Location: <span className="text-white font-semibold">{activeStory.city}</span>
                  </p>
                </div>

                {/* Actual quote card */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-[20px] relative">
                  <span className="absolute top-4 right-4 text-accent/15 font-serif text-6xl leading-none select-none">“</span>
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center gap-1 text-accent">
                      {[...Array(activeStory.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent stroke-accent" />
                      ))}
                    </div>
                    <p className="text-stone-200 text-sm italic leading-relaxed">
                      "{activeStory.quote}"
                    </p>
                  </div>
                </div>

                {/* Architectural Highlights */}
                <div className="space-y-3">
                  <span className="block text-[10px] uppercase tracking-wider text-stone-400 font-bold">Cabinetry & Integration Highlights</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeStory.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-xs text-stone-200">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Button redirection */}
                <button
                  onClick={() => {
                    setActiveStory(null);
                    const hashEl = document.getElementById('contact');
                    if (hashEl) {
                      hashEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full py-4 bg-accent hover:bg-white text-primary-dark hover:text-primary hover:scale-[1.03] transition-all duration-300 font-bold text-xs tracking-wider uppercase rounded-[14px] flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Build A Similar Space</span>
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
