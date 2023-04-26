const getCroppedUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const optimizedImage =
    url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return optimizedImage;
};
export default getCroppedUrl;
