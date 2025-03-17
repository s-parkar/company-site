import { Cloudinary } from '@cloudinary/url-gen';
import { CloudinaryVideo } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { quality } from '@cloudinary/url-gen/actions/delivery';

export const cloudinaryConfig = {
  cloudName: 'dghiieubt',
  profile: 'cld-default'
};

export const heroVideos = [
  {
    publicId: 'n0gp3hdqly5rdwvvsgr8',
    format: 'mp4',
    transformation: {
      quality: 'auto:best',
      width: 1920,
      height: 1080,
      crop: 'fill',
    },
  },
  {
    publicId: 'g3tafvsqrrqcfzggmgy2',
    format: 'mp4',
    transformation: {
      quality: 'auto:best',
      width: 1920,
      height: 1080,
      crop: 'fill',
    },
  },
];

const cld = new Cloudinary({
  cloud: {
    cloudName: cloudinaryConfig.cloudName
  }
});

export const initCloudinaryPlayer = (elementId) => {
  const video = cld.video(heroVideos[0].publicId);
  video
    .resize(scale().width(1920).height(1080))
    .delivery(quality('auto'));

  return video;
};

export const getVideoUrl = (video) => {
  const { publicId } = video;
  const videoInstance = cld.video(publicId);
  videoInstance
    .resize(scale().width(video.transformation.width).height(video.transformation.height))
    .delivery(quality(video.transformation.quality));

  return videoInstance.toURL();
};