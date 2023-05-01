import { useState, useRef, useEffect } from 'react';
import shortid from 'shortid';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

// Layout
import ChatLayout from '../layout/ChatLayout';
import ChatArena from '../components/Chat';

// Components
import Form from '../components/Form';

export default function Home() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [messages, setMessages] = useState([]);
  const messageRef = useRef(null);

  const [typingCompleted, setTypingCompleted] = useState(false);

  const handleSubmit = (message) => {
    const newMessage = {
      id: messages.length + 1,
      answer: '',
      message,
    };
    setMessages([...messages, newMessage]);

    const answerText = "Benin Republic, officially known as the Republic of Benin, is a country located in West Africa. Its history is rich and varied, with a unique blend of ancient cultures and modern influences. The region that is now known as Benin was once part of the powerful Dahomey Kingdom, which was one of the most important states in West Africa in the 19th century. The kingdom was known for its military might, sophisticated political system, and its tradition of human sacrifice."; // Replace with your answer content
    const typingSpeed = 15;
    let index = 0;

    const typeText = () => {
  
      if (index < answerText.length) {
        newMessage.answer += answerText.charAt(index);
        setMessages([...messages, newMessage]);
        setTimeout(typeText, getRandomDelay());
        index++;
      } else {
        setTypingCompleted(true);
      }

    };

    function getRandomDelay() {
      const minDelay = typingSpeed - 50;
      const maxDelay = typingSpeed + 50;
      return Math.random() * (maxDelay - minDelay) + minDelay;
    }

    typeText();
  };

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Random page
  const generateNewChat = () => {
    const id = shortid.generate();
    navigate(`/chat/${id}`);
  };

  return (
    <>
      <ChatLayout onNewChat={generateNewChat}>
        <ChatArena messages={messages} messageRef={messageRef} typingCompleted={typingCompleted} />
      </ChatLayout>
    </>
  );
}
