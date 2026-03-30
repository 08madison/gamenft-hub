import { useEffect, useRef, useState } from 'react';
import { Heart, MessageCircle, Send, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { comments as initialComments } from '@/data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CommunityVoice() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set());

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.community-title', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.from('.comment-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.comments-grid',
          start: 'top 80%',
        },
      });

      gsap.from('.comment-form', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.comment-form',
          start: 'top 90%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Floating animation for cards
  useEffect(() => {
    const cards = document.querySelectorAll('.comment-card');
    cards.forEach((card, index) => {
      gsap.to(card, {
        y: `${Math.sin(index) * 15}`,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, [comments]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now().toString(),
      user: {
        name: 'You',
        avatar: '/user-jordan.jpg',
      },
      content: newComment,
      timestamp: 'Just now',
      likes: 0,
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleLike = (commentId: string) => {
    setLikedComments((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(commentId)) {
        newSet.delete(commentId);
      } else {
        newSet.add(commentId);
      }
      return newSet;
    });

    setComments((prev) =>
      prev.map((c) =>
        c.id === commentId
          ? { ...c, likes: likedComments.has(commentId) ? c.likes - 1 : c.likes + 1 }
          : c
      )
    );
  };

  return (
    <section
      ref={sectionRef}
      id="community"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-green/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 community-title">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Community <span className="gradient-text">Voice</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join the conversation. Share your thoughts, connect with fellow collectors, 
            and be part of our growing community.
          </p>
        </div>

        {/* Comment Form */}
        <div className="comment-form max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSubmitComment} className="glass rounded-2xl p-4">
            <div className="flex gap-4">
              <img
                src="/user-jordan.jpg"
                alt="Your avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <Input
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="bg-dark/50 border-white/10 text-white placeholder:text-gray-500 focus:border-purple"
                />
              </div>
              <Button
                type="submit"
                className="bg-purple hover:bg-purple-dark text-white"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>

        {/* Comments Grid */}
        <div className="comments-grid grid md:grid-cols-3 gap-6">
          {comments.map((comment, index) => (
            <div
              key={comment.id}
              className="comment-card"
              style={{ marginTop: index === 1 ? '2rem' : index === 2 ? '1rem' : '0' }}
            >
              <div className="glass rounded-2xl p-6 h-full hover:shadow-card-glow transition-shadow duration-300">
                {/* User Info */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={comment.user.avatar}
                    alt={comment.user.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{comment.user.name}</h4>
                    <span className="text-xs text-gray-500">{comment.timestamp}</span>
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {comment.content}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleLike(comment.id)}
                    className={`flex items-center gap-2 text-sm transition-colors ${
                      likedComments.has(comment.id)
                        ? 'text-neon-green'
                        : 'text-gray-500 hover:text-neon-green'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    {comment.likes}
                  </button>
                  <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple-light transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    Reply
                  </button>
                  <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-pink-500 transition-colors ml-auto">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Active Members', value: '25K+' },
            { label: 'Daily Comments', value: '1.2K' },
            { label: 'Discussions', value: '850+' },
            { label: 'Countries', value: '45+' },
          ].map((stat, index) => (
            <div key={index} className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
