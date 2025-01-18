import { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const NewsPage = () => {
  // Track user votes with a map of newsId -> vote type ('like' or 'dislike')
  const [userVotes, setUserVotes] = useState({});
  
  const [newsItems, setNewsItems] = useState([
    {
      id: 1,
      title: "Community Service Project Success",
      content: "Our recent community service project reached over 100 families in need. Members actively participated in distributing essential supplies.",
      image: "/bloodeventroc.jpg",
      likes: 24,
      dislikes: 2,
      gradient: 'linear-gradient(135deg, #6B8DD6 0%, #8E37D7 100%)'
    },
    {
      id: 2,
      title: "Leadership Training Workshop",
      content: "Join us for an exclusive leadership training workshop next week. Learn essential skills from industry experts.",
      image: "/api/placeholder/400/200",
      likes: 45,
      dislikes: 3,
      gradient: 'linear-gradient(135deg, #4E65FF 0%, #92EFFD 100%)'
    },
    {
      id: 3,
      title: "International Understanding Day",
      content: "Celebrating diversity and cultural exchange. Special performances and food festival planned for next month.",
      image: "/api/placeholder/400/200",
      likes: 32,
      dislikes: 1,
      gradient: 'linear-gradient(135deg, #FF9897 0%, #F650A0 100%)'
    },
    {
      id: 4,
      title: "Member Achievement Spotlight",
      content: "Congratulations to our members who received recognition at the recent Rotaract District Conference.",
      image: "/api/placeholder/400/200",
      likes: 56,
      dislikes: 4,
      gradient: 'linear-gradient(135deg, #736EFE 0%, #5EFCE8 100%)'
    }
  ]);

  const handleVote = (id, voteType) => {
    const currentVote = userVotes[id];
    
    // If user hasn't voted on this item yet
    if (!currentVote) {
      setUserVotes({...userVotes, [id]: voteType});
      setNewsItems(newsItems.map(item => 
        item.id === id ? {
          ...item,
          [voteType]: item[voteType] + 1
        } : item
      ));
    }
    // If user is clicking the same vote type again, remove their vote
    else if (currentVote === voteType) {
      const newUserVotes = {...userVotes};
      delete newUserVotes[id];
      setUserVotes(newUserVotes);
      setNewsItems(newsItems.map(item => 
        item.id === id ? {
          ...item,
          [voteType]: item[voteType] - 1
        } : item
      ));
    }
    // If user is changing their vote
    else {
      setUserVotes({...userVotes, [id]: voteType});
      setNewsItems(newsItems.map(item => 
        item.id === id ? {
          ...item,
          [voteType]: item[voteType] + 1,
          [currentVote]: item[currentVote] - 1
        } : item
      ));
    }
  };

  return (
    <div className="min-h-screen p-8" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-3">
          Rotaract Club News
        </h1>
        <p className="text-xl text-gray-200 text-center mb-12 italic">
          Empowering Youth, Serving Humanity
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map(news => (
            <div 
              key={news.id}
              className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
              style={{
                background: news.gradient
              }}
            >
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-white">{news.title}</h2>
                <p className="text-gray-100 mb-4">{news.content}</p>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => handleVote(news.id, 'likes')}
                    className={`flex items-center space-x-2 ${
                      userVotes[news.id] === 'likes' 
                        ? 'text-blue-300' 
                        : 'text-white'
                    } hover:text-blue-300 transition-colors duration-200`}
                  >
                    <ThumbsUp size={20} />
                    <span>{news.likes}</span>
                  </button>
                  
                  <button 
                    onClick={() => handleVote(news.id, 'dislikes')}
                    className={`flex items-center space-x-2 ${
                      userVotes[news.id] === 'dislikes' 
                        ? 'text-red-300' 
                        : 'text-white'
                    } hover:text-red-300 transition-colors duration-200`}
                  >
                    <ThumbsDown size={20} />
                    <span>{news.dislikes}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;