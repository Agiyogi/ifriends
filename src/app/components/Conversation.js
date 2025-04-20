"use client";

import { useConversation } from "@11labs/react";
import { useCallback, useState } from "react";
import Image from "next/image";

export default function Conversation({ agentId, characterName, avatarSrc }) {
  const [isActive, setIsActive] = useState(false);
  const [imageError, setImageError] = useState(false);

  const conversation = useConversation({
    onConnect: () => console.log(`Connected to ${characterName}`),
    onDisconnect: () => {
      console.log(`Disconnected from ${characterName}`);
      setIsActive(false);
    },
    onMessage: (message) =>
      console.log(`Message from ${characterName}:`, message),
    onError: (error) => console.error(`Error with ${characterName}:`, error),
  });

  const startConversation = useCallback(async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Start the conversation with your agent
      await conversation.startSession({
        agentId: agentId, // Use the provided agent ID
      });

      setIsActive(true);
    } catch (error) {
      console.error("Failed to start conversation:", error);
    }
  }, [conversation, agentId]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
    setIsActive(false);
  }, [conversation]);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Character avatar that serves as the conversation toggle */}
      <div
        className={`w-32 h-32 rounded-full cursor-pointer transition-all duration-300 ${
          isActive
            ? "ring-4 ring-offset-2 ring-purple-500 scale-105"
            : "hover:scale-105"
        }`}
        onClick={isActive ? stopConversation : startConversation}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-pink-500 p-1">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            {!imageError ? (
              <img
                src={avatarSrc}
                alt={`${characterName} avatar`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${avatarSrc}`);
                  setImageError(true);
                }}
              />
            ) : (
              <div className="text-purple-500 text-center">
                <span className="text-2xl">?</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Character name */}
      <h4 className="mt-2 font-medium text-purple-700">{characterName}</h4>

      {/* Status indicator */}
      {isActive && (
        <div className="text-sm text-purple-600 flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              conversation.isSpeaking
                ? "bg-green-500"
                : "bg-blue-500 animate-pulse"
            }`}
          ></div>
          <span>{conversation.isSpeaking ? "Speaking" : "Listening"}</span>
        </div>
      )}
    </div>
  );
}
