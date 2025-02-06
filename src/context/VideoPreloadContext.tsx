
import { createContext } from 'react';

interface VideoPreloadContextType {
  isVideoPreloaded: boolean;
  setIsVideoPreloaded: (value: boolean) => void;
}

export const VideoPreloadContext = createContext<VideoPreloadContextType>({
  isVideoPreloaded: false,
  setIsVideoPreloaded: () => {},
});