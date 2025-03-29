export const heroVideos = [
  // Add your Cloudinary video URLs here
  'https://res.cloudinary.com/demo/video/upload/sample.mp4',
  'https://res.cloudinary.com/demo/video/upload/sample2.mp4'
];

export const getVideoUrl = (index) => {
  return heroVideos[index];
};