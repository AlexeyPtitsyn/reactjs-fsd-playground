import { useEffect, useRef } from "react";

const WebSocketLogger = () => {
  const socketRef = useRef<WebSocket | null>(null);
  useEffect(() => {
   socketRef.current = new WebSocket('wss://example.com/chat');
   socketRef.current.onmessage = (event) => {
     const message = JSON.parse(event.data);
     console.log('Новое сообщение:', message);
   };

   return () => {
     socketRef.current?.close();
   };
 }, []);

  return (
    <>
      <h3>WebSocketLogger</h3>
      (тут нечего показывать)
    </>
  );
}

export default WebSocketLogger;
